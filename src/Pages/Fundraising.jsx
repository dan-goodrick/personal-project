import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
// import { LinearProgress } from "@mui/material";


export default function Fundraising() {
  const { fundraising } = useLoaderData();

  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate, i) => (
          <>
          <ViewCard
            key={i}
            family={candidate}
          />
          {/* <LinearProgress variant="determinate" value={candidate.fundsRaised} color="red" maxValue={10000}/> */}
          </>
      ))}
    </>
  );
}
