import { useLoaderData } from "react-router-dom";
import CandidateCard from "../Elements/Candidate";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  console.log("Planned Projects", planned)
  return (
    <>
      <h1>Upcoming Projects</h1>
      {planned.map((candidate) => (
        <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}