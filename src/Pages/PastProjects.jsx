import { useLoaderData, Link } from "react-router-dom";

export default function PastProjects() {
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