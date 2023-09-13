import { useLoaderData } from "react-router-dom";
import CandidateCard from "../Elements/Candidate";


export default function Home() {
  const { projects } = useLoaderData();
  console.log("fundraising", projects);
  return (
    <>
      <h1>Builders of Hope</h1>
      {projects.map((candidate) => (
        <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}
