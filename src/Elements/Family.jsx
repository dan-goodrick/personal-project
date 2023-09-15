import Typography from "@mui/material/Typography";
import getAge from "../functions/getAge";

const Family = ({ members }) => {
  // I want to print the head of household in a different font at the top of the list
  return (
    <>       
    <Typography variant="body1" color="text.primary">
    Family Data
  </Typography>
      {members[0]
        ? members.map((person, i) => (
          <div key={person.personId} >
            <Typography variant={i ? "body2" : "body1"} color="text.secondary" >
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
          ))
        : null}
    </>
  );
};

export default Family;

