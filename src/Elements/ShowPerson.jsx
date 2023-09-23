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
        <Typography variant="body2" color="text.secondary">
          Gender: {person.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          WhatsApp: {person.whatsApp}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {person.email}
        </Typography>
      </div>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setEditPerson(true)}
      >
        Edit
      </Button>
      <Button
        size="small"
        color="primary"
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
