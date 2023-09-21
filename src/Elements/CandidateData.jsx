import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "../Widgets/Text";
import Select from "../Widgets/Select";
import Checkbox from "../Widgets/Select";
import axios from "axios";
import Button from "@mui/material/Button";

//todo: title should be a select box

//https://formik.org/docs/tutorial
// And now we can use these
const CandidateData = ({ candidate, setEditCandidate, handleEditCandidate }) => {
  console.log("Edit candidate:", candidate);

  return (
    <>
      Edit Candidate
      <Formik
        initialValues={{
          candidateId: candidate.candidateId,
          lastName: candidate.lastName,
          address: candidate.address,
          municipality: candidate.municipality,
          city: candidate.city,
          state: candidate.state,
          country: candidate.country,
          lat: candidate.lat,
          lon: candidate.lon,
          zip: candidate.zip,
          googleMaps: candidate.googleMaps,
          landTitle: candidate.landTitle,
          currOnLoan: candidate.currOnLoan,
          paymentCnt: candidate.paymentCnt,
          loanDuration: candidate.loanDuration,
          videoUrl: candidate.videoUrl,
        }}
        validationSchema={Yup.object({
          address: Yup.string().max(150, "Must be 150 characters or less"),
          city: Yup.string().max(20, "Must be 20 characters or less"),
          municipality: Yup.string().max(20, "Must be 20 characters or less"),
          state: Yup.string().max(20, "Must be 20 characters or less"),
          country: Yup.string().max(20, "Must be 20 characters or less"),
          zip: Yup.string().max(20, "Must be 20 characters or less"),
          title: Yup.string().max(20, "Must be 20 characters or less"),
          videoUrl: Yup.string().max(200, "Must be 200 characters or less"),
        })}
        onSubmit={(values) => {handleEditCandidate(values)}}
      >
        <Form>
          <Text name="lastName" type="text" placeholder="Last Name" />
          <br />
          <Text name="address" type="text" placeholder="Address" />
          <br />
          <Text name="city" type="text" placeholder="City" />
          <br />
          <Text name="municipality" type="text" placeholder="Municipality" />
          <Text name="state" type="text" placeholder="State" />
          <Text name="country" type="text" placeholder="Country" />
          <Text name="zip" type="text" placeholder="ZIP" />
          <Text name="lat" type="text" placeholder="Latitude" />
          <Text name="lon" type="text" placeholder="Longitude" />
          <Text name="googleMaps" type="text" placeholder="Google Maps URL" />
          <Select label="Title" name="landTitle">
            <option value="mortgage">Mortgage</option>
            <option value="in Hand">Title in Hand</option>
          </Select>
          <Text name="paymentCnt" type="text" placeholder="Current Payment #" /> of 
          <Text name="loanDuration" type="text" placeholder="Total Loan Installments" />
          <Checkbox name="currOnLoan">Current on Payments</Checkbox>
          <Text name="videoUrl" type="text" placeholder="Url of Promo Video" />
          <div>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => setEditCandidate(false)}
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default CandidateData;
