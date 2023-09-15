import { useLoaderData } from "react-router-dom";
import AdminCards from "../Elements/AdminCards";
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
      <input type="button" value="Add Candidate" onClick={() => "Add candidate function"} />
      <input type="button" value="Move Candidates"
        onClick={() => "Move candidate with card action area wrap"} />
      <h2>Incomplete Build Applications</h2>
      <div>{<AdminCards cards={incompleteApplications} />}</div>
      <h2>Completed Build Applications</h2>
      <div>{<AdminCards cards={acceptedApplications} />}</div>
      <h2>Projects in fundraising</h2>
      <div>{<AdminCards cards={fundraisingProjects} />}</div>
      <h2>Projects in Planning</h2>
      <div>{<AdminCards cards={plannedProjects} />}</div>
      <h2>Completed Projects</h2>
      <div>{<AdminCards cards={completedProjects} />}</div>
    </>
  );
}
