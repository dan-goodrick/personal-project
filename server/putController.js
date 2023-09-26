import {
  Candidate,
  Phase,
  Person,
} from "./model.js";

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
  
  person: (req, res) => {
    console.log("put Person", req.body);
    Person.update(req.body, { where: { personId: req.params.id } })
      .then((val) => {
        console.log("updated person:", val);
        res.json({ success: true });
      })
      .catch((error) => {
        console.error(`Unable to Add Candidate ${req.body}`, error);
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
        console.error(`Unable to Add Candidate ${req.body}`, error);
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
        console.error(`Unable to Add phase ${req.body}`, error);
      });
  },
};

export default serverFunctions;
