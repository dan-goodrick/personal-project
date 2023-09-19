import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";

import DeleteCandidate from "./DeleteCandidate";
import EditCandidate from "./EditCandidate";
import ShowCandidate from "./ShowCandidate";



export default function CandidateCard({ candidate }) {
  const [editing, setEditing] = useState(false);
  const [del, setDelete] = useState(false);




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
        { editing ? 
          <EditCandidate candidate={candidate} setEditing={setEditing} /> : 
          <ShowCandidate candidate={candidate} setEditing={setEditing} setDelete={setDelete}/>
        }
        {del && <DeleteCandidate candidate={candidate} setDelete={setDelete}/> }
        </CardContent>
    </Card>
  );
}
//TODO: turn off buttons if not on the admin page
