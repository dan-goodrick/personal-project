import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteCandidate from "./DeleteCandidate";
import { useState } from "react";
import ShowPerson from "./ShowPerson";

export default function ShowCandidate({ candidate, setEditing }) {
  const [deleteCandidate, setDeleteCandidate] = useState(false);

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {candidate.lastName}
      </Typography>
      {candidate.people.map((person, i) => (
        <ShowPerson key={person.personId} person={person} setEditing = {setEditing} variant={i?"body2":"body1"} />
      ))}
      <Typography variant="body2" color="text.secondary">
        Address: {candidate.address} <br />
        {candidate.municipality}, {candidate.city}, {candidate.country},{" "}
        {candidate.zip}
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
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setEditing(true)}
      >
        Edit
      </Button>
      <Button
        size="small"
        color="primary"
        variant="outlined"
        onClick={()=>setDeleteCandidate(true)}
      >
        Delete
      </Button>
      {deleteCandidate && (<DeleteCandidate candidate={candidate} setDeleteCandidate={setDeleteCandidate}/>) }
    </>
  );
}
