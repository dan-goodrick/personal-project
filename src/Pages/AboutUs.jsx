import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { styles } from "./Home";

export default function AboutUs() {
  const { boardMembers } = useLoaderData();
  const style = styles();
  return (
    <div>
      <div className={style.bg} />
      <h1>We are builders of hope</h1>
      {boardMembers.map((member, i) => (
        <ViewCard key={i} family={member} />
      ))}
    </div>
  );
}
