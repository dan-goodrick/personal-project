import { useLoaderData } from "react-router-dom";
import CandidateCard from "../Elements/Candidate";

export default function PastProjects() {
  const { projects } = useLoaderData();
  console.log("Past projects", projects)
  return (
    <>
      <h1>Completed Projects</h1>
      {projects.map((candidate) => (
        <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}