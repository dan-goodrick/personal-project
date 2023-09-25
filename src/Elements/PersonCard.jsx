import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import EditPerson from "./EditPerson";
import ShowPerson from "./ShowPerson";

export default function PersonCard({ person, i}) {
  const [editPerson, setEditPerson] = useState(false);
  const [newPerson, setNewPerson] = useState(person);

  // todo: get the primary image from images
  return (
    <div>
        <CardContent>
        { editPerson ? 
          <EditPerson person={newPerson} setEditPerson={setEditPerson} setNewPerson={setNewPerson} /> : 
          <ShowPerson person={newPerson} setEditPerson={setEditPerson} i={i} />
        }
        </CardContent>
    </div>
  );
}
