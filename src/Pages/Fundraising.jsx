import { useLoaderData } from "react-router-dom";
import CandidateCard from "../Elements/Candidate";


export default function Fundraising() {
  const { projects } = useLoaderData();
  console.log("Fundraising", projects)
  return (
    <>
      <h1>Current Fundraisers</h1>
      {projects.map((candidate) => (
        <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}