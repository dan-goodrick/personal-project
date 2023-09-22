import { useLoaderData } from "react-router-dom";
import IterateCandidates from "../Elements/IterateCandidates";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const { candidates } = useLoaderData();
  const [moving, setMoving] = useState(false);
  const navigate = useNavigate();

  
  const incomplete = 1;
  const accepted = 2;
  const fundraising = 3;
  const planned = 4;
  const completed = 5;


  console.log("candidates", candidates);
  const incompleteApplications = candidates.filter(
    (candidate) => candidate.phase.phaseId == incomplete
  );
  // needs at least one record in incomplete applications
  const acceptedApplications = candidates.filter(
    (candidate) => candidate.phase.phaseId == accepted
  );
  const fundraisingProjects = candidates.filter(
    (candidate) => candidate.phase.phaseId == fundraising
  );
  const plannedProjects = candidates.filter(
    (candidate) => candidate.phase.phaseId == planned
  );
  const completedProjects = candidates.filter(
    (candidate) => candidate.phase.phaseId == completed
  );
  return (
    <>
      <h1>Admin Page</h1>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "none" : "block" }}
        onClick={() => setMoving(true)}
      >
        Move Candidates
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "block" : "none" }}
        onClick={() => setMoving(false)}
      >
        Edit Candidates
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => navigate("/newRecord")}
      >
        Add Candidate
      </Button>
      <h2>Incomplete Build Applications</h2>
      <div>{<IterateCandidates cards={incompleteApplications} moving={moving} />}</div>
      <h2>Completed Build Applications</h2>
      <div>{<IterateCandidates cards={acceptedApplications} moving={moving} />}</div>
      <h2>Projects in fundraising</h2>
      <div>{<IterateCandidates cards={fundraisingProjects} moving={moving} />}</div>
      <h2>Projects in Planning</h2>
      <div>{<IterateCandidates cards={plannedProjects} moving={moving} />}</div>
      <h2>Completed Projects</h2>
      <div>{<IterateCandidates cards={completedProjects} moving={moving} />}</div>
    </>
  );
}
