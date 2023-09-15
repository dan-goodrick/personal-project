import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import "yup-phone-lite";
import Text from './Text';
import Select from './Select';
import Checkbox from './Checkbox';

//todo: title should be a select box

//https://formik.org/docs/tutorial
// And now we can use these
const CandidateData = ({candidate}) => {
  console.log("Edit candidate:", candidate);
  return (
    <>Edit Candidate
      <Formik
        initialValues={{
          address: candidate.address,
          city: candidate.city,
          municipality: candidate.municipality,
          state: candidate.state,
          country: candidate.country, 
          zip: candidate.zip, 
          title: candidate.title,
          current: candidate.currOnLoan, 
          videoUrl: candidate.videoUrl,
          imageUrl: candidate.images[0].imageUrl
        }}
        validationSchema={Yup.object({
          address: Yup.string().max(150, 'Must be 150 characters or less'),
          city: Yup.string().max(20, 'Must be 20 characters or less'),
          municipality: Yup.string().max(20, 'Must be 20 characters or less'),
          state:Yup.string().max(20, 'Must be 20 characters or less'),
          country: Yup.string().max(20, 'Must be 20 characters or less'),
          zip: Yup.string().max(20, 'Must be 20 characters or less'),
          title: Yup.string().max(20, 'Must be 20 characters or less'),
          current: Yup.string().max(20, 'Must be 20 characters or less'),
          videoUrl: Yup.string().max(20, 'Must be 20 characters or less'),
          })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Text
            name="address"
            type="text"
            placeholder="Address"
          /><br/>
          <Text
            name="city"
            type="text"
            placeholder="City"
            /><br/>

          <Text
            name="municipality"
            type="text"
            placeholder="Municipality"
            />

          <Text
            name="state"
            type="text"
            placeholder="State"
            />

          <Text
            name="country"
            type="text"
            placeholder="Country"
            />

          <Text
            name="zip"
            type="text"
            placeholder="ZIP"
            />

          <Select label="Title" name="title">
            <option value="mortgage">Mortgage</option>
            <option value="own">Title in Hand</option>
          </Select>

          <Checkbox name="current">
            Current on Payments
          </Checkbox>

          <Text
            name="videoUrl"
            type="text"
            placeholder="Url of Promo Video"
            />

        </Form>
      </Formik>
    </>
  );
};

export default CandidateData