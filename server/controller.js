import { Candidate, User, Image, Phase, Person } from "./model.js";

// import {v2 as cloudinary} from 'cloudinary';
// cloudinary.config({ 
//   cloud_name: 'dyozbgxgo', 
//   api_key: '344111862392384', 
//   api_secret: 'SGjvV5AbnS83AcV-rD1TBUHby4I' 
// });
// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

const serverFunctions = {
  login: async (req, res) => {
    console.log("login with session", req.session);
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log("user: ", user, "matches? ", req.body);
    if (!user || user.password != req.body.password) {
      res.json({ success: false });
      return;
    }
    req.session.userId = user.userId;
    res.json({ success: true });
  },
  logout: async (req, res) => {
    console.log("logout with session", req.session);
    if (!req.session.userId) {
      res.status(401).json({ error: `no user is logged in` });
      return;
    }
    await User.findByPk(req.session.userId);
    req.session.destroy();
    res.json({ success: true });
  },
  getByPhase: (req, res) => {
    console.log(req.params);
    Candidate.findAll({
      include: [
        { model: Image, where: { primary: true }, attributes: ["imageUrl"] },
        { model: Phase, where: { phaseId: req.params.id } },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
    .then((candidates) => {
      if (candidates) {
        console.log("Found candidates:", candidates);
        res.json(candidates);
      } else {
        console.log(`candidates ${req.params} not found.`);
        res.json({ success: false })
      }
    })
    .catch((error) => {
      console.error("Error finding candidates:", error);
    });
  },

  getAllCandidates: (req, res) => {
    console.log(req.params);
    Candidate.findAll({
      include: [
        { model: Image, where: { primary: true }, attributes: ["imageUrl"] },
        { model: Phase },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
      .then((candidates) => {
        if (candidates) {
          console.log("Found candidates:", candidates);
          res.json(candidates);
        } else {
          console.log(`candidates ${req.params} not found.`);
          res.json({ success: false })
        }
      })
      .catch((error) => {
        console.error("Error finding candidates:", error);
      });
  },

  getCandidate: (req, res) => {
    console.log(req.params);
    Candidate.findByPk(req.params.id, {
      include: [
        { model: Image, where: { primary: true }, attributes: ["imageUrl"] },
        { model: Phase },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
      .then((candidate) => {
        if (candidate) {
          console.log("Found candidate:", candidate);
          res.json(candidate);
        } else {
          console.log(`candidate ${req.params} not found.`);
          res.json({ success: false })
        }
      })
      .catch((error) => {
        console.error("Error finding candidate:", error);
      });
  },

  getPerson: (req, res) => {
    console.log(req.params);
    Person.findByPk(req.params.id)
      .then((person) => {
        if (person) {
          console.log("Found person:", person);
          res.json(person);
        } else {
          console.log(`person ${req.params} not found.`);
          res.json({ success: false })
        }  
      })
      .catch((error) => {
        console.error("Error finding candidate:", error);
      });
  },

  deleteCandidate: (req, res) => {
    Candidate.destroy({ where: { candidateId: +req.params.id } })
      .then((val) => {
        console.log("deleted candidate:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },

  deletePerson: (req, res) => {
    Person.destroy({ where: { personId: req.params.id } })
      .then((val) => {
        console.log("deleted person:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },

  putPerson: (req, res) => {
    console.log("put Person", req.body);
    Person.update(req.body, { where: { personId: req.params.id } })
      .then((val) => {
        console.log("updated person:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to Add Candidate ${req.body}`, error);
      });
  },

  putCandidate: (req, res) => {
    console.log("put candidate", req.body, "candidateId", req.params.id );
    Candidate.update(req.body, { where: { candidateId: req.params.id } })
      .then((val) => {
        console.log("updated candidate:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to Add Candidate ${req.body}`, error);
      });
  },

  putPhase: (req, res) => {
    console.log("put phase", req.body);
    Phase.update(req.body, { where: { phaseId: req.params.id } })
      .then((val) => {
        console.log("updated phase:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to Add phase ${req.body}`, error);
      });
  },

  addPerson: (req, res) => {
    console.log("add person", req.body);
    Person.create(req.body)
      .then((val) => {
        console.log("New person created:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to Add Person ${req.body}`, error);
      });
  },

  addImage: (req, res) => {
    console.log("add photo", req.body);
    Image.create(req.body)
      .then((val) => {
        console.log("New image URL added:", val);
        res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to add image ${req.body}`, error);
      });
  },

  addCandidate: (req, res) => {
    const {candidate, peopleArr, imgArr} = req.body
    Candidate.create(candidate)
      .then((val) => {
        console.log("New candidate created:", val);
        peopleArr.map((person) => { 
          person.candidateId = val.candidateId
          Person.create(person).then((val) => { 
            console.log("New Person created with candidate:", val)})
         })
        imgArr.map((image) => { 
          image.candidateId = val.candidateId
          Image.create(image).then((val) => { 
            console.log("New Image created:", val);
           })
         })
         res.json({ success: true })
      })
      .catch((error) => {
        console.error(`Unable to Add Candidate ${req.body}`, error);
      });
  },
};

export default serverFunctions;

