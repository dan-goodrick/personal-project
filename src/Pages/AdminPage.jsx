import { useLoaderData } from "react-router-dom";
import Column from "../Elements/Column";
const incomplete = 1
const accepted = 2
const fundraising = 3
const planned = 4
const completed = 5
export default function PastProjects() {
  const { projects } = useLoaderData();
  console.log("projects", projects)
  const incompleteApplications = projects.filter((candidate) => (
candidate.phaseId===incomplete
  ));
  const acceptedApplications = projects.filter((candidate) => (
candidate.phaseId===accepted
  ));
  const fundraisingProjects = projects.filter((candidate) => (
candidate.phaseId===fundraising
  ));
  const plannedProjects = projects.filter((candidate) => (
candidate.phaseId===planned
  ));
  const completedProjects = projects.filter((candidate) => (
candidate.phaseId===completed
  ));
  return (
    <>
      <h1>Admin Page</h1>
      <h2>Incomplete Build Applications</h2>
      <p>{<Column cards={incompleteApplications}/>}</p>
      <h2>Completed Build Applications</h2>
      <p>{<Column cards={acceptedApplications}/>}</p>
      <h2>Projects in fundraising</h2>
      <p>{<Column cards={fundraisingProjects}/>}</p>
      <h2>Projects in Planning</h2>
      <p>{<Column cards={plannedProjects}/>}</p>
      <h2>Completed Projects</h2>
      <p>{<Column cards={completedProjects}/>}</p>
    </>
  );
}

    