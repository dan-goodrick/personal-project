import { useLoaderData } from "react-router-dom";
import ViewCandidate from "../Elements/ViewCandidate";

export default function Fundraising() {
  const { fundraising } = useLoaderData();
  console.log("Fundraising", fundraising)
  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate) => (
        <ViewCandidate key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}