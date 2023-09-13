import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import DisplayData from "./DisplayData";
import EditData from "./EditData";
import axios from "axios";

export default function CandidateCard({ candidate }) {
  const [editing, setEditing] = useState(false);
  const [candidates, setCandidates] = useState(false);

  const destroyCandidate = async (id) => { 
    const { data } = await axios.delete(`/api/candidate/auth/${id}`);
    // if (!data.error) {
    //   setCandidates(candidates.filter((el) => el.id !== id));
    // }
    console.log(`deleted %{id}`, data);
  }
  const updateCandidate = async (candidate) => { 
    const { data } = await axios.put(`/api/candidate/auth/${id}`);
    // if (!data.error) {
    //   setCandidates(candidates.filter((el) => el.id !== id));
    // }
    console.log(`deleted %{id}`, data);
  }
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
          <EditData candidate={candidate} setEditing={setEditing} destroyCandidate={destroyCandidate}/> : 
          <DisplayData candidate={candidate} setEditing={setEditing} destroyCandidate={destroyCandidate}/>
        }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
//TODO: turn off buttons if not on the admin page
