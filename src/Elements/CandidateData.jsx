import { Formik, Form } from "formik";
import Text from "../Widgets/Text";
import Select from "../Widgets/Select";
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
          fundRequirement: candidate.fundRequirement,
          about:candidate.about
        }}
        onSubmit={(values) => {handleEditCandidate(values)}}
      >
        <Form style={{display:"flex", flexDirection:"column", width:width}}>
          <Text name="lastName" type="text" placeholder="Last Name" />
          <Text name="address" type="text" placeholder="Address" />
          <Text name="city" type="text" placeholder="City" />
          <Text name="municipality" type="text" placeholder="Municipality" />
          <Text name="state" type="text" placeholder="State" />
          <Text name="country" type="text" placeholder="Country" />
          <Text name="zip" type="text" placeholder="ZIP" />
          <Text name="lat" type="text" placeholder="Latitude" />
          <Text name="lon" type="text" placeholder="Longitude" />
          <Text name="googleMaps" type="text" placeholder="Google Maps URL" />
          <Text name="fundsRaised" type="text" placeholder="Funds collected" /> of 
          <Text name="fundRequirement" type="text" placeholder="Needed funds" />
          <Select label="Title" name="landTitle">
            <option value="mortgage">Mortgage</option>
            <option value="in Hand">Title in Hand</option>
          </Select>
          <Text name="paymentCnt" type="text" placeholder="Current Payment #" /> of 
          <Text name="loanDuration" type="text" placeholder="Total Loan Installments" />
          <Text name="about" type="text" placeholder="About" />
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
