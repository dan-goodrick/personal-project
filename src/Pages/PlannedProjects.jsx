import { useLoaderData } from "react-router-dom";
import ViewCandidate from "../Elements/ViewCandidate";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  // console.log("Planned Projects", planned)
  return (
    <>
      <h1>Upcoming Projects</h1>
      {planned.map((candidate) => (
        <ViewCandidate key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}