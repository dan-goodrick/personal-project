import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";

import EditCandidate from "./EditCandidate";
import ShowCandidate from "./ShowCandidate";



export default function CandidateCard({ candidate }) {
  const [editCandidate, setEditCandidate] = useState(false);
  console.log("CandidateCard:", candidate, "editCandidate", editCandidate);
  // todo: get the primary image from images
  return (
    <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          component="img"
          height="140"
          image={candidate.images[0].imageUrl}
          alt={candidate.lastName}
        />
        <CardContent>
        { editCandidate ? 
          <EditCandidate candidate={candidate} setEditCandidate={setEditCandidate} /> : 
          <ShowCandidate candidate={candidate} setEditCandidate={setEditCandidate} />
        }
        </CardContent>
    </Card>
  );
}
