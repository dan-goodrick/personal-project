import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";

export default function Fundraising() {
  const { fundraising } = useLoaderData();
  // console.log("Fundraising", fundraising)
  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate, i) => (
        <ViewCard key={i} family={candidate} />
        ))}
    </>
  );
}