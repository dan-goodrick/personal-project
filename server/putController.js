import { Candidate, Phase, Person, Member } from "./model.js";

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

  member: (req, res) => {
    console.log("put member", req.body, "memberId", req.params.id);
    Member.update(req.body, { where: { memberId: req.params.id } })
      .then((val) => {
        console.log("updated member:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to update member ${req.body}`, error);
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
  phases: (req, res) => {
    console.log("put phaseMap", req.body);
    for (let [candidateId, phaseId] of Object.entries(req.body)) {
      Candidate.update({ phaseId }, { where: { candidateId } })
        .then((val) => {
          console.log("updated phase:", val);
          res.json({ success: true });
        })
        .catch((error) => {
          console.error(`Unable to update phase ${req.body}`, error);
        });
    }
  },
};

export default serverFunctions;
