import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "../Widgets/Text";
import Select from "../Widgets/Select";
import Checkbox from "../Widgets/Checkbox";
import axios from "axios";
import Button from "@mui/material/Button";

//https://formik.org/docs/tutorial
// And now we can use these
const PersonData = ({ person, setEditPerson, setNewPerson }) => {
  // console.log("Edit Person:", person);

  return (
    <>
      Edit Person
      <Formik
        initialValues={{
          personId: person.personId,
          firstName: person.firstName,
          lastName: person.lastName,
          whatsApp: person.whatsApp,
          email: person.email,
          gender: person.gender, // added for our select
          headOfHousehold: person.headOfHousehold, // added for our checkbox
          dob: new Date(person.dob).toLocaleDateString("es-pa"),
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less"),
          lastName: Yup.string().max(20, "Must be 20 characters or less"),
          // whatsApp: Yup.string().phone("MX", "Please enter a valid phone number"),
          email: Yup.string().email("Invalid email address"),
          dob: Yup.date("Use 1/1 for unknown day/month"),
          headOfHousehold: Yup.boolean(),
          gender: Yup.string().oneOf(["male", "female", "other"]),
        })}
        onSubmit={ (values) => {
          // console.log("Person values", values);
          axios.put(`/api/person/${values.personId}`,values)
            .then((candidate) => {
              setNewPerson(values)
              // console.log("updated candidate:", candidate);
            })
            .catch((error) => {
              console.error(`Unable to update Candidate ${values}`, error);
            });
          setEditPerson(false)
        }}
      >
        <Form>
          <Text name="firstName" type="text" placeholder="First Name" />
          <Text name="lastName" type="text" placeholder="Last Name" />
          <br />

          <Text
            label="Phone (WhatsApp): "
            name="whatsApp"
            type="text"
            placeholder="WhatsApp"
          />
          <br />

          <Text
            label="Email Address: "
            name="email"
            type="email"
            placeholder="Email Address"
          />
          <br />

          <Text
            label="Date of Birth: "
            name="dob"
            type="text"
            placeholder="Date of Birth"
          />

          <Select label="Gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>

          <Checkbox name="headOfHousehold">Head of Household</Checkbox>
          <div>

        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => setEditPerson(false)}
        >
          Cancel
        </Button>
        <Button size="small" color="primary" variant="contained" type="submit">
          Save
        </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default PersonData;
