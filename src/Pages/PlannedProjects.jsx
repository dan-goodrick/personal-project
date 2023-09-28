import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  // console.log("Planned Projects", planned)
  return (
    <>
      <h1>Upcoming Projects</h1>
      {planned.map((candidate, i) => (
        <ViewCard key={i} family={candidate} />
        ))}
    </>
  );
}