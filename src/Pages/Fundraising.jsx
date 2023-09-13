import { useLoaderData } from "react-router-dom";
import CandidateCard from "../Elements/Candidate";


export default function Fundraising() {
  const { fundraising } = useLoaderData();
  console.log("Fundraising", fundraising)
  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate) => (
        <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}