import {
  Candidate,
  Image,
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
  

  person: (req, res) => {
    console.log("add person", req.body);
    Person.create(req.body)
      .then((val) => {
        console.log("New person created:", val);
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to Add Person ${req.body}`, error);
      });
  },

  image: (req, res) => {
    console.log("add photo", req.body);
    Image.create(req.body)
      .then((val) => {
        console.log("New image URL added:", val);
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to add image ${req.body}`, error);
      });
  },
  projectImages: async (req) => {
    console.log("update photos", req.body);
    req.body.map((image) => {
      if (image.imageId) {
        // put images that have primary keys
        ProjectImage.update(image, { where: { imageId: image.imageId } })
          .then((val) => {
            console.log("updated image:", val);
          })
          .catch((error) => {
            console.error(`Unable to Add phase ${req.body}`, error);
          });
      } else {
        // add images that don't
        ProjectImage.create(image)
          .then((val) => {
            console.log("New image URL added:", val);
          })
          .catch((error) => {
            console.error(`Unable to add image ${req.body}`, error);
          });
      }
    })
  },

  candidate: (req, res) => {
    const { candidate, peopleArr, imgArrVar } = req.body;
    console.log("req.body", req.body);
    Candidate.create(candidate)
      .then((val) => {
        console.log("New candidate created:", val);
        peopleArr.map((person) => {
          person.candidateId = val.candidateId;
          Person.create(person)
            .then((val) => {
              console.log("New Person created with candidate:", val);
            })
            .catch((error) => {
              console.error(`Unable to Add Person ${val}`, error);
            });
        });
        console.log("imgArr", imgArrVar);
        imgArrVar.map((image) => {
          image.candidateId = val.candidateId;
          Image.create(image)
            .then((res) => {
              console.log("New Image:", res, " created from:", image);
            })
            .catch((error) => {
              console.log(`Unable to Add Image ${val}`, error);
            });
        });
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to Add Candidate ${req.body}`, error);
      });
  },
};

export default serverFunctions;
