import { useLoaderData } from "react-router-dom";
import CandidateCard from "../Elements/Candidate";


export default function PlannedProjects() {
  const { projects } = useLoaderData();
  console.log("Planned Projects", projects)
  return (
    <>
      <h1>Upcoming Projects</h1>
      <p>
      {projects.map((candidate) => (
        <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
      </p>
    </>
  );
}