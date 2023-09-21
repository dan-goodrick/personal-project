import { useLoaderData } from "react-router-dom";
import ViewCandidate from "../Elements/ViewCandidate";

//TODO: add top card for each category past, current fundraising

export default function Home() {
  const { projects } = useLoaderData();
  // console.log("fundraising", projects);
  return (
    <>
      <h1>Builders of Hope</h1>
      {projects.map((candidate) => (
        <ViewCandidate key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}
