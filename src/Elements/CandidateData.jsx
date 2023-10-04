import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "../Widgets/Text";
import Select from "../Widgets/Select";
import Checkbox from "../Widgets/Select";
import Button from "@mui/material/Button";

//todo: title should be a select box

//https://formik.org/docs/tutorial
// And now we can use these
const CandidateData = ({ candidate, setEditCandidate, handleEditCandidate }) => {
  // console.log("Edit candidate:", candidate);

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
          fundsRaised: candidate.fundsRaised,
          fundRequirement: candidate.fundRequirement
        }}
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
          <br />
          <Text name="state" type="text" placeholder="State" />
          <br />
          <Text name="country" type="text" placeholder="Country" />
          <br />
          <Text name="zip" type="text" placeholder="ZIP" />
          <br />
          <Text name="lat" type="text" placeholder="Latitude" />
          <br />
          <Text name="lon" type="text" placeholder="Longitude" />
          <br />
          <Text name="googleMaps" type="text" placeholder="Google Maps URL" />
          <br />
          <Text name="fundsRaised" type="text" placeholder="Funds collected" /> of 
          <Text name="fundRequirement" type="text" placeholder="Needed funds" />
          <br />
          <Select label="Title" name="landTitle">
            <option value="mortgage">Mortgage</option>
            <option value="in Hand">Title in Hand</option>
          </Select>
          <br />
          <Text name="paymentCnt" type="text" placeholder="Current Payment #" /> of 
          <Text name="loanDuration" type="text" placeholder="Total Loan Installments" />
          <br />
          <Text name="videoUrl" type="text" placeholder="Url of Promo Video" />
          <div>
            <Button
              variant="outlined"
              onClick={() => setEditCandidate(false)}
            >
              Cancel
            </Button>
            <Button

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
