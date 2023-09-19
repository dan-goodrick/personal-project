import CardContent from "@mui/material/CardContent";
import { useState } from "react";

import EditPerson from "./EditPerson";
import ShowPerson from "./ShowPerson";



export default function PersonCard({ person, i}) {
  const [editPerson, setEditPerson] = useState(false);

  // todo: get the primary image from images
  return (
    <div>
        <CardContent>
        { editPerson ? 
          <EditPerson person={person} setEditPerson={setEditPerson} /> : 
          <ShowPerson person={person} setEditPerson={setEditPerson} i={i} />
        }
        </CardContent>
    </div>
  );
}
