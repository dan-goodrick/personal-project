import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import getAge from "../functions/getAge";
import DeletePerson from "./DeletePerson";


export default function ShowPerson({ person, setEditing, variant}) {
  const [deletePerson, setDeletePerson] = useState(false);
  
  return (
    <>
          <div key={person.personId} >
        <Typography variant={variant} color="text.secondary" >
          {person.firstName} {person.lastName}: {getAge(person.dob)} 
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          Gender: {person.gender} 
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          WhatsApp: {person.whatsApp}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          Email: {person.email}
        </Typography>
      </div>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setEditing(true)}
      >
        Edit
      </Button>
      <Button
        size="small"
        color="primary"
        variant="outlined"
        onClick={()=>setDeletePerson(true)}
      >
        Delete
      </Button>
      {deletePerson && <DeletePerson person={person} setDeletePerson={setDeletePerson}/> }

    </>
  );
}
