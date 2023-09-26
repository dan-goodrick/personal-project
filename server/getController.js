import {
  Candidate,
  Image,
  Phase,
  Person,
  ProjectImage,
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

  projectImages:  (req, res) => {
    ProjectImage.findAll()
      .then((images) => {
        images.map( async (image) => { 
          // thumbnails created here, not uploaded or downloaded 
          image.thumbnail = await thumbnail({ uri: image.original });
         })
        res.json(images);
      })
      .catch((error) => {
        console.error("Error finding project images:", error);
      });
  },
};

export default serverFunctions;
