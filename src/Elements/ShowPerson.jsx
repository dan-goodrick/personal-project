import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import getAge from "../functions/getAge";
import Delete from "./Delete";

export default function ShowPerson({ person, setEditPerson, i }) {
  const [del, setDelete] = useState(false);

  return (
    <>
      <div key={person.personId}>
        <Typography variant={i?"body2":"body1"} color="text.secondary">
          {person.firstName} {person.lastName}: {getAge(person.dob)}
        </Typography>
        {person.gender&&<Typography variant="body2" color="text.secondary">
          Gender: {person.gender}
        </Typography>}
        {person.whatsApp&&<Typography variant="body2" color="text.secondary">
          WhatsApp: {person.whatsApp}
        </Typography>}
       {person.email&&<Typography variant="body2" color="text.secondary">
          Email: {person.email}
        </Typography>}
      </div>
      <Button

        onClick={() => setEditPerson(true)}
      >
        Edit
      </Button>
      <Button

        variant="outlined"
        onClick={() => setDelete(true)}
      >
        Delete
      </Button>
      {del && (
        <Delete
        uri={'/api/person/'} 
        id={person.personId} 
        name={`${person.firstName} ${person.lastName}`} 
        setDelete = {setDelete}
        />
      )}
    </>
  );
}
