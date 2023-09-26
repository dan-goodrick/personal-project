import {
  Candidate,
  User,
  Image,
  Phase,
  Person,
  ProjectImage,
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
