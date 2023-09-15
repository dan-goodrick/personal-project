import { useLoaderData } from "react-router-dom";

export default function PlannedProjects() {
  const { projects } = useLoaderData();
  console.log("projects", projects)
  const listPastProjects = projects.map((candidate) => (
    <li key={candidate.candidateId}>
    {candidate.lastName}</li>
  ));
  return (
    <>
      <h1>Completed Projects</h1>
      <p>{listPastProjects}</p>
    </>
  );
}