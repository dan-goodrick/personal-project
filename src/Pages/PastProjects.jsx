import { useLoaderData } from "react-router-dom";
import ViewCandidate from "../Elements/ViewCandidate";

export default function PastProjects() {
  const { projects } = useLoaderData();
  console.log("Past projects", projects)
  return (
    <>
      <h1>Completed Projects</h1>
      {projects.map((candidate) => (
        <ViewCandidate key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}