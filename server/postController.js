import {
  Candidate,
  Image,
  Person,
  Member,
} from "./model.js";
import process from "process";
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.VITE_STRIPE_SECRET);
import Stripe from 'stripe';
const stripe = new Stripe(process.env.VITE_STRIPE_SECRET);

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

  carousel: (req, res) => {
    console.log("add carousel picture", req.body);
    Image.create(req.body)
      .then((val) => {
        console.log("New carousel picture:", val);
        res.json(val);
      })
      .catch((error) => {
        console.error(`Unable to Add carousel image ${req.body}`, error);
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
        Image.update(image, { where: { imageId: image.imageId } })
          .then((val) => {
            console.log("updated image:", val);
          })
          .catch((error) => {
            console.error(`Unable to Add phase ${req.body}`, error);
          });
      } else {
        // add images that don't
        image.thumbnail = image.original
        Image.create(image)
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
  member: (req, res) => {
    const { member, peopleArr, imgArrVar } = req.body;
    console.log("req.body", req.body);
    Member.create(member)
      .then((val) => {
        console.log("New member created:", val);
        peopleArr.map((person) => {
          person.memberId = val.memberId;
          Person.create(person)
            .then((val) => {
              console.log("New Person created with member:", val);
            })
            .catch((error) => {
              console.error(`Unable to Add Person ${val}`, error);
            });
        });
        console.log("imgArr", imgArrVar);
        imgArrVar.map((image) => {
          image.memberId = val.memberId;
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
        console.error(`Unable to Add member ${req.body}`, error);
      });
  },
  paymentIntent: async (req, res) => {
    console.log("paymentIntent", req.body.body.donation);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.body.donation,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  },
};

export default serverFunctions;

"pmc_1NvPcADsgTnXCdvnSEJD5s2b"