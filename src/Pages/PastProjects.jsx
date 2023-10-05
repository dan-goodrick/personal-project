import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { styles } from "./Home";

export default function PastProjects() {
  const { projects } = useLoaderData();
  const style = styles();
  return (
    <div>
      <div className={style.bg} />
      <h1>Completed Projects</h1>
      {projects.map((candidate, i) => (
        <ViewCard key={i} family={candidate} />
      ))}
    </div>
  );
}
