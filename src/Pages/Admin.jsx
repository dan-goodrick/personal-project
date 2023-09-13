import { useLoaderData } from "react-router-dom";
import Column from "../Elements/Column";
const incomplete = 1;
const accepted = 2;
const fundraising = 3;
const planned = 4;
const completed = 5;
export default function Admin() {
  const { candidates } = useLoaderData();
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
  return (
    <>
      <h1>Admin Page</h1>
      <h2>Incomplete Build Applications</h2>
      <div>{<Column cards={incompleteApplications} />}</div>
      <h2>Completed Build Applications</h2>
      <div>{<Column cards={acceptedApplications} />}</div>
      <h2>Projects in fundraising</h2>
      <div>{<Column cards={fundraisingProjects} />}</div>
      <h2>Projects in Planning</h2>
      <div>{<Column cards={plannedProjects} />}</div>
      <h2>Completed Projects</h2>
      <div>{<Column cards={completedProjects} />}</div>
    </>
  );
}
