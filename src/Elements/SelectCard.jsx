import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import CandidateEdit from "./CandidateEdit";
import CandidateShow from "./CandidateShow";



export default function SelectCard({ candidate }) {
  const [editing, setEditing] = useState(false);

  useEffect (() => { 
    const i = candidate.people.findIndex(member => member.headOfHousehold == true);
    const headOfHousehold = candidate.people.splice(i,1)[0]
    candidate.people.sort((a, b) => a.dob.localeCompare(b.dob));
    candidate.people.unshift(headOfHousehold)
   }, [candidate])


  // todo: get the primary image from images

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={candidate.images[0].imageUrl}
          alt={candidate.lastName}
        />
        <CardContent>
        { editing ? 
          <CandidateEdit candidate={candidate} setEditing={setEditing} /> : 
          <CandidateShow candidate={candidate} setEditing={setEditing} />
        }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
//TODO: turn off buttons if not on the admin page
