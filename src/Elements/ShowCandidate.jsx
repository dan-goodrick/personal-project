import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteCandidate from "./DeleteCandidate";
import { useState } from "react";
import ShowPeople from "./ShowPeople";

export default function ShowCandidate({ candidate, setEditCandidate }) {
  const [deleteCandidate, setDeleteCandidate] = useState(false);
  console.log("ShowCandidate", candidate, "deleteCandidate", deleteCandidate);

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {candidate.lastName}
      </Typography>
      <ShowPeople people={candidate.people} />
      <Typography variant="body2" color="text.secondary">
        Address: {candidate.address} <br />
        {candidate.municipality}, {candidate.city}, {candidate.country},{" "}
        {candidate.zip}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lat/Lon:
        <Link href={candidate.googleMaps}>
          {candidate.lat? candidate.lat.toFixed(5):null}, {candidate.lon? candidate.lon.toFixed(5):null}
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
      <Button
        size="small"
        color="primary"
        variant="outlined"
        onClick={() => setDeleteCandidate(true)}
      >
        Delete Candidate
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setEditCandidate(true)}
      >
        Edit Candidate Data
      </Button>

      {deleteCandidate && (
        <DeleteCandidate
          candidate={candidate}
          setDeleteCandidate={setDeleteCandidate}
        />
      )}
    </>
  );
}
