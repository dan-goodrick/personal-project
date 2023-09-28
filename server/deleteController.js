import {
  Candidate,
  Image,
  Person,
  Member,
} from "./model.js";


const serverFunctions = {

  candidate: (req, res) => {
    Candidate.destroy({ where: { candidateId: +req.params.id } })
      .then((val) => {
        console.log("deleted candidate:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },

  person: (req, res) => {
    Person.destroy({ where: { personId: req.params.id } })
      .then((val) => {
        console.log("deleted person:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },
  member: (req, res) => {
    Member.destroy({ where: { memberId: req.params.id } })
      .then((val) => {
        console.log("deleted member:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove member ${req.params.id}`, error);
      });
  },
  photo: (req, res) => {
    Image.destroy({ where: { imageId: req.params.id } })
      .then((val) => {
        console.log("deleted image:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove image ${req.params.id}`, error);
      });
  },

};

export default serverFunctions;
