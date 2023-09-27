import {
  Candidate,
  Image,
  Phase,
  Person,
  Volunteer,
} from "./model.js";
import thumbnail from 'image-thumbnail'


const serverFunctions = {

  byPhase: (req, res) => {
    console.log(req.params);
    Candidate.findAll({
      include: [
        { model: Image, where: { primary: true }, attributes: ["original"] },
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
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding candidates:", error);
      });
  },

  candidates: (req, res) => {
    console.log(req.params);
    Candidate.findAll({
      include: [
        { model: Image, where: { primary: true }, attributes: ["original"] },
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
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding candidates:", error);
      });
  },
  
  volunteers: (req, res) => {
    console.log(req.params);
    Volunteer.findAll({
      include: [
        { model: Image, attributes: ["original"] },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
      .then((volunteers) => {
        if (volunteers) {
          console.log("Found volunteers:", volunteers);
          res.json(volunteers);
        } else {
          console.log(`volunteers ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding volunteers:", error);
      });
  },

  candidate: (req, res) => {
    console.log(req.params);
    Candidate.findByPk(req.params.id, {
      include: [
        { model: Image, where: { primary: true }, attributes: ["original"] },
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
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding candidate:", error);
      });
  },
  volunteer: (req, res) => {
    console.log(req.params);
    Volunteer.findByPk(req.params.id, {
      include: [
        { model: Image, attributes: ["original"] },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
      .then((volunteer) => {
        if (volunteer) {
          console.log("Found volunteer:", volunteer);
          res.json(volunteer);
        } else {
          console.log(`volunteer ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding volunteer:", error);
      });
  },

  person: (req, res) => {
    console.log(req.params);
    Person.findByPk(req.params.id)
      .then((person) => {
        if (person) {
          console.log("Found person:", person);
          res.json(person);
        } else {
          console.log(`person ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding candidate:", error);
      });
  },

  carousel:  (req, res) => {
    Image.findAll({where: { tag: 'carousel' }})
      .then((images) => {
        res.json(images);
      })
      .catch((error) => {
        console.error("Error finding project images:", error);
      });
  },
};

export default serverFunctions;
