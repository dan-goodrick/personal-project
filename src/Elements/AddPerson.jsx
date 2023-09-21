import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "./../Widgets/Text";
import Select from "./../Widgets/Select";
import Checkbox from "./../Widgets/Checkbox";
import Button from "@mui/material/Button";

// setAddPerson and updateDB are required props.  
// setPeopleArr and peopleArr are needed if updateDb=false
const AddPerson = ( {handleAddPerson, setAddPerson} ) => {
  return (
    <>
      <Formik
        initialValues={{
          // lastName: "",     //  text
          // firstName: "",    //  text
          // dob: null,        //  Date
          // whatsApp: "",     //  text
          // email: "",        //  text
          gender: "other",     //  select
          // headOfHousehold: false, // checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less"),
          lastName: Yup.string().max(20, "Must be 20 characters or less"),
          // whatsApp: Yup.string().phone(
          //   "MX",
          //   "Please enter a valid phone number"
          // ),
          email: Yup.string().email("Invalid email address"),
          dob: Yup.date("Use 1/1 for unknown day/month"),
          headOfHousehold: Yup.boolean(),
          gender: Yup.string().oneOf(["male", "female", "other"]),
        })}
        onSubmit={ (values) => {handleAddPerson(values)}}
      >
        <Form>
          <Text label="First Name" name="firstName" type="text" placeholder="Jane" />
          <Text label="Last Name" name="lastName" type="text" placeholder="Doe"/>
          <Text label="Phone (WhatsApp)" name="whatsApp" type="text" placeholder="ex. +1 (801) 822-8677"/>
          <Text label="Email Address" name="email" type="email" placeholder="dannyjeee@yahoo.com" />
          <Text label="Date of Birth" name="dob" type="text" placeholder="11/12/1978"/>
          <Select label="Gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          <Checkbox name="headOfHousehold">Head of Household</Checkbox>
          <div>
            <Button size="small" color="primary" variant="outlined" onClick={() => setAddPerson(false)}
            >Cancel</Button>
            <Button size="small" color="primary" variant="contained" type="submit"
            >Save</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddPerson;
