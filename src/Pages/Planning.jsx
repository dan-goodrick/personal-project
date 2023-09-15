import { useLoaderData } from "react-router-dom";
import CandidateView from "../Elements/CandidateView";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  console.log("Planned Projects", planned)
  return (
    <>
      <h1>Upcoming Projects</h1>
      {planned.map((candidate) => (
        <CandidateView key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}