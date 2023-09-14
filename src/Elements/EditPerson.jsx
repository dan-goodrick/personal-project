import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "yup-phone-lite";
import Text from './Text';
import Select from './Select';
import Checkbox from './Checkbox';


//https://formik.org/docs/tutorial
// And now we can use these
const EditPerson = ({person}) => {
  console.log("Edit Person:", person);
  return (
    <>
      <Formik
        initialValues={{
          firstName: person.firstName,
          lastName: person.lastName,
          whatsApp: person.whatsApp,
          email: person.email,
          gender: person.gender, // added for our select
          headOfHousehold: person.headOfHousehold, // added for our checkbox
          dob: person.headOfHousehold, 
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Must be 15 characters or less'),
          lastName: Yup.string().max(20, 'Must be 20 characters or less'),
          whatsApp: Yup.string().phone("MX", "Please enter a valid phone number"),
          email:Yup.string().email('Invalid email address'),
          dob: Yup.date("Use 1/1 for unknown day/month"),
          headOfHousehold: Yup.boolean(),
          gender: Yup.string().oneOf(['male', 'female', 'other']),})}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Text
            label="First Name"
            name="firstName"
            type="text"
            placeholder="bring in person"
          />

          <Text
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="bring in person"
          />

          <Text
            label="Phone (WhatsApp)"
            name="whatsApp"
            type="text"
            placeholder="Two letter country code"
          />

          <Text
            label="Email Address"
            name="email"
            type="email"
            placeholder="bring in person"
          />

          <Text
            label="Date of Birth"
            name="dob"
            type="text"
            placeholder="bring in person"
          />

          <Select label="Gender" name="gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>

          <Checkbox name="headOfHousehold">
            Head of Household
          </Checkbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default EditPerson