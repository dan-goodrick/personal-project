import { useLoaderData } from "react-router-dom";
import AdminCards from "../Elements/AdminCards";
import { useState } from "react";
import emptyObject from "../functions/emptyObject";
import Button from "@mui/material/Button";
import AddButton from "../Elements/AddButton";


const incomplete = 1;
const accepted = 2;
const fundraising = 3;
const planned = 4;
const completed = 5;
export default function Admin() {
  const { candidates } = useLoaderData();
  const [moving, setMoving] = useState(false);


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
        visible={moving?"true":"false"}
        onClick={() => setMoving(false)}
      >
        Move
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        visible={moving?"true":"false"}
        onClick={() => setMoving(true)}
      >
        Done
      </Button>
      <h2>Incomplete Build Applications</h2>
      <div>{<AdminCards cards={incompleteApplications} moving={moving} addButton={true}/>}</div>
      <h2>Completed Build Applications</h2>
      <div>{<AdminCards cards={acceptedApplications} moving={moving} addButton={false}/>}</div>
      <h2>Projects in fundraising</h2>
      <div>{<AdminCards cards={fundraisingProjects} moving={moving} addButton={false}/>}</div>
      <h2>Projects in Planning</h2>
      <div>{<AdminCards cards={plannedProjects} moving={moving} addButton={false}/>}</div>
      <h2>Completed Projects</h2>
      <div>{<AdminCards cards={completedProjects} moving={moving} addButton={false}/>}</div>
    </>
  );
}
