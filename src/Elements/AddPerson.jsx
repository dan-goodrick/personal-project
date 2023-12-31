import { Formik, Form } from "formik";
import Text from "./../Widgets/Text";
import Select from "./../Widgets/Select";
import Checkbox from "./../Widgets/Checkbox";
import Button from "@mui/material/Button";

const AddPerson = ( {handleAddPerson, setAddPerson} ) => {
  return (
    <>
      <Formik
        initialValues={{
          lastName: "",     //  text
          firstName: "",    //  text
          dob: "01/01/1900",        //  Date
          whatsApp: "",     //  text
          email: "",        //  text
          gender: "other",     //  select
          headOfHousehold: false, // checkbox
        }}
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
            <Button  variant="outlined" onClick={() => setAddPerson(false)}
            >Cancel</Button>
            <Button  type="submit"
            >Save</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddPerson;
