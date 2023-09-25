import { useLoaderData } from "react-router-dom";
import IterateCandidates from "../Elements/IterateCandidates";
import Map from "../Elements/Map";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import CandidateCard from "../Elements/CandidateCard";
import ShowCandidate from "../Elements/ShowCandidate";

export default function Admin() {
  
  const { candidates } = useLoaderData();
  const [moving, setMoving] = useState(false);
  const [component, setComponent] = useState("show") ;

    useEffect (() => {
      moving?
      setComponent("show"):
      setComponent("edit")
    }, [])

  const navigate = useNavigate();
    
  const incomplete = 1;
  const accepted = 2;
  const fundraising = 3;
  const planned = 4;
  const completed = 5;

  const incompleteApplications = candidates.filter(
    (candidate) => candidate.phase.phaseId == incomplete
  );
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

  const map = { show: ShowCandidate, edit: CandidateCard}
  

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
        style={{ display: moving ? "none" : "block" }}
        onClick={() => navigate("/newRecord")}
      >
        Add Candidate
      </Button>
      <Grid
      container
      spacing={2}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      >
        <h2>Incomplete Build Applications</h2>
        <div>{<Map data={incompleteApplications} component={map[component]} />}</div>
        <h2>Completed Build Applications</h2>
        <div>{<IterateCandidates cards={acceptedApplications} moving={moving} />}</div>
        <h2>Projects in fundraising</h2>
        <div>{<IterateCandidates cards={fundraisingProjects} moving={moving} />}</div>
        <h2>Projects in Planning</h2>
        <div>{<IterateCandidates cards={plannedProjects} moving={moving} />}</div>
        <h2>Completed Projects</h2>
        <div>{<IterateCandidates cards={completedProjects} moving={moving} />}</div>
      </Grid>
    </>
  );
}
