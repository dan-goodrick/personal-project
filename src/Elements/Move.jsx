// import { useState } from "react";
import { CardActionArea } from "@mui/material";
import ViewCard from "./ViewCard";

export default function Move({ phases, labels }) {
  // const [phase, setPhase] = useState(false);

  return phases.map((phase, i) => (
    <div key={i}>
      <h2>{labels[i]}</h2>
      {phase.map((candidate, j) => (
        <CardActionArea key={j}>
          <ViewCard  family={candidate} />
        </CardActionArea>
      ))}
    </div>
  ));
}
