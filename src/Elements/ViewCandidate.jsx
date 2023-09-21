import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import getAge from "../functions/getAge";

export default function ViewCandidate({ candidate }) {
  //todo replace this with filter on the back end
  // useEffect(() => {
  //   const i = candidate.people.findIndex(
  //     (member) => member.headOfHousehold == true
  //   );
  //   const headOfHousehold = candidate.people.splice(i, 1)[0];
  //   candidate.people.sort((a, b) => a.dob.localeCompare(b.dob));
  //   candidate.people.unshift(headOfHousehold);
  // }, [candidate]);

  // todo: get the primary image from images

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={candidate.images[0].imageUrl}
        alt={candidate.lastName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {candidate.lastName}
        </Typography>
        {candidate.people.map((person, i) => (
          <div key={person.personId} >
            <Typography variant={i ? "body2" : "body1"} color="text.secondary" >
              {person.firstName} {person.lastName}: {getAge(person.dob)} 
            </Typography>
          </div>
          ))}
      </CardContent>
    </Card>
  );
}
