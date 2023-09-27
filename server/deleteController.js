import {
  Candidate,
  Person,
  Volunteer,
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
  volunteer: (req, res) => {
    Volunteer.destroy({ where: { volunteerId: req.params.id } })
      .then((val) => {
        console.log("deleted volunteer:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove volunteer ${req.params.id}`, error);
      });
  },
  photo: (req, res) => {
    Person.destroy({ where: { personId: req.params.id } })
      .then((val) => {
        console.log("deleted person:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to remove Record ${req.params.id}`, error);
      });
  },

};

export default serverFunctions;
