import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Typography } from "@mui/material";
import getAge from "../functions/getAge";
import { useState } from "react";
import Donate from "./Donate";

export default function ViewCard({ family }) {
  const [open, setOpen] = useState(false);
  console.log("family", family);
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="340"
          image={family.images[0].original}
          alt={family.lastName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {family.lastName} Family
          </Typography>
          {family.candidateId &&
            family.people.map((person, i) => (
              <div key={person.personId}>
                <Typography
                  variant={i ? "body2" : "body1"}
                  color="text.secondary"
                >
                  {person.firstName} {person.lastName}: {getAge(person.dob)}
                </Typography>
              </div>
            ))}
          <Typography>{family.about}</Typography>
        </CardContent>
        {(family.phaseId===3) && 
        <Button
          size="small"
          color="primary"
          variant="contained"
          type="submit"
          onClick={() => setOpen(true)}
        >
          Contribute
        </Button>
        }
        <Donate open={open} lastName={family.lastName} />
      </Card>
    </Grid>
  );
}
