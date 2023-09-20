import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Button from "@mui/material/Button";
import EditCandidate from "./EditCandidate";
import ShowCandidate from "./ShowCandidate";
import AddPerson from "./AddPerson";



export default function CandidateCard({ candidate }) {
  const [addPerson, setAddPerson] = useState(false);
  const [editCandidate, setEditCandidate] = useState(false);
  const [newCandidate, setNewCandidate] = useState(candidate);

  // console.log("CandidateCard:", candidate, "editCandidate", editCandidate);
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
        {addPerson ? 
        <AddPerson setAddPerson={setAddPerson}/> :
        <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => setAddPerson(true)}
            > Add Person
        </Button>
        }
        { editCandidate ? 
          <EditCandidate candidate={newCandidate} setEditCandidate={setEditCandidate} setNewCandidate={setNewCandidate} /> : 
          <ShowCandidate candidate={newCandidate} setEditCandidate={setEditCandidate} />
        }
        </CardContent>
    </Card>
  );
}
