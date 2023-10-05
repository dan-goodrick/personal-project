import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { styles } from "./Home";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  // console.log("Planned Projects", planned)
  const style = styles();
  return (
    <div>
      <div className={style.bg} />
      <h1>Upcoming Projects</h1>
      {planned.map((candidate, i) => (
        <ViewCard key={i} family={candidate} />
        ))}
    </div>
  );
}