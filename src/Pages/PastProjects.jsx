import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";

export default function PastProjects() {
  const { projects } = useLoaderData();
  // console.log("Past projects", projects)
  return (
    <>
      <h1>Completed Projects</h1>
      {projects.map((candidate, i) => (
        <ViewCard key={i} family={candidate} />
        ))}
    </>
  );
}