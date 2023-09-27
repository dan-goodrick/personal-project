import {
  Candidate,
  Phase,
  Person,
  Volunteer,
} from "./model.js";



const serverFunctions = {
  
  person: (req, res) => {
    console.log("put Person", req.body);
    Person.update(req.body, { where: { personId: req.params.id } })
      .then((val) => {
        console.log("updated person:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to update person ${req.body}`, error);
      });
  },

  candidate: (req, res) => {
    console.log("put candidate", req.body, "candidateId", req.params.id);
    Candidate.update(req.body, { where: { candidateId: req.params.id } })
      .then((val) => {
        console.log("updated candidate:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to update Candidate ${req.body}`, error);
      });
  },

  volunteer: (req, res) => {
    console.log("put volunteer", req.body, "volunteerId", req.params.id);
    Volunteer.update(req.body, { where: { volunteerId: req.params.id } })
      .then((val) => {
        console.log("updated volunteer:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to update volunteer ${req.body}`, error);
      });
  },

  phase: (req, res) => {
    console.log("put phase", req.body);
    Phase.update(req.body, { where: { phaseId: req.params.id } })
      .then((val) => {
        console.log("updated phase:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to update phase ${req.body}`, error);
      });
  },
};

export default serverFunctions;
