import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Family from "./Family";
import destroyCandidate from "../functions/deleteCandidate";


export default function DisplayCandidate({ candidate, setEditing}) {

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {candidate.lastName}
      </Typography>
      <Family members={candidate.people} />
      <Typography variant="body1" color="text.primary">
        Application Data
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Address: {candidate.address} <br/>{candidate.municipality}, {candidate.region}, {candidate.country}, {candidate.zip}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lat/Lon:
        <Link href={candidate.googleMaps}>
          {candidate.lat.toFixed(5)}, {candidate.lon.toFixed(5)}
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Title: {candidate.landTitle}
      </Typography>
      {candidate.landTitle === "mortgage" ? (
          <Typography variant="body2" color="text.secondary">
            Loan Status: {candidate.currOnLoan}
          </Typography>
      ) : null}
      <Typography variant="body1" color="text.primary">
        Admin Data
      </Typography>
      <Typography variant="body2" color="text.secondary">
        At phase since: {new Date(candidate.currPhaseDate).toDateString()}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Funding: {candidate.fundsRaised}/{candidate.fundingRequirement}
      </Typography>
      <input type="button" value="Edit" onClick={() => setEditing(true)}/>
      {/* <input type="button" value="Delete" onClick={() => destroyCandidate(candidate.candidateId)}/> */}

    </>
  );
}
