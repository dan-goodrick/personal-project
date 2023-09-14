import Typography from "@mui/material/Typography";
import getAge from "../functions/getAge";

const Family = ({ members }) => {
  // I want to print the head of household in a different font at the top of the list
  return (
    <>
      {members[0]
        ? members.map((person, i) => (
            <Typography
              variant={i ? "body2" : "body1"}
              color="text.secondary"
              key={person.personId}
            >
              {person.firstName} {person.lastName}: {getAge(person.dob)}
            </Typography>
          ))
        : null}
    </>
  );
};

export default Family;

