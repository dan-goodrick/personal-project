import { PHASES } from "../src/constants.js";
import { Candidate, Image, Phase, Person, Member } from "./model.js";

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
        [Person, "dob", "DESC"],
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
  phases: (req, res) => {
    console.log(req.params);
    Candidate.findAll({
      raw: true,
      include: [
        {
          model: Image,
          where: { primary: true },
          attributes: ["original", "thumbnail"],
        },
      ],
      attributes: ["candidateId", "lastName", "phaseId"],
      order: ["phaseId"],
    })
      .then((candidates) => {
        if (candidates) {
          const c_copy = [...candidates];
          c_copy.forEach((el) => (el.image = el['images.thumbnail'] ? el['images.thumbnail']: el['images.original'],
                el.column = PHASES[el.phaseId])
          );
          console.log(`${c_copy.length} candidates found.`, c_copy);
          res.json(c_copy);
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
        { model: Image, where: { primary: true }, attributes: ["original", "thumbnail"] },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "DESC"],
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

  members: (req, res) => {
    console.log(req.params);
    Member.findAll({
      include: [
        { model: Image, where: { primary: true }, attributes: ["original"] },
        { model: Person },
      ],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
      .then((members) => {
        if (members) {
          console.log("Found members:", members);
          res.json(members);
        } else {
          console.log(`members ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding members:", error);
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
  member: (req, res) => {
    console.log(req.params);
    Member.findByPk(req.params.id, {
      include: [{ model: Image, attributes: ["original"] }, { model: Person }],
      order: [
        [Person, "headOfHousehold", "DESC"],
        [Person, "dob", "ASC"],
      ],
    })
      .then((member) => {
        if (member) {
          console.log("Found member:", member);
          res.json(member);
        } else {
          console.log(`member ${req.params} not found.`);
          res.json({ success: false });
        }
      })
      .catch((error) => {
        console.error("Error finding member:", error);
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

  carousel: (req, res) => {
    Image.findAll({ where: { tag: "carousel" } })
      .then((images) => {
        res.json(images);
      })
      .catch((error) => {
        console.error("Error finding project images:", error);
      });
  },
};

export default serverFunctions;
