import { useLoaderData } from "react-router-dom";
import CandidateView from "../Elements/CandidateView";

export default function PastProjects() {
  const { projects } = useLoaderData();
  console.log("Past projects", projects)
  return (
    <>
      <h1>Completed Projects</h1>
      {projects.map((candidate) => (
        <CandidateView key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}