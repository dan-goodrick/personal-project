import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";

export default function AboutUs() {
  const { boardMembers } = useLoaderData();
  return (
    <>
      <h1>We are builders of hope</h1>
      {boardMembers.map((member, i) => (
        <ViewCard key={i} family={member} />
        ))}
    </>
  );
}