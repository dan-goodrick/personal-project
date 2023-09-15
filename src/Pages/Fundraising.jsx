import { useLoaderData } from "react-router-dom";
import CandidateView from "../Elements/CandidateView";


export default function Fundraising() {
  const { fundraising } = useLoaderData();
  console.log("Fundraising", fundraising)
  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate) => (
        <CandidateView key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}