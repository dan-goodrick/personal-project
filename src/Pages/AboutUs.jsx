import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { Grid, Typography } from "@mui/material";

export default function AboutUs() {
  const { boardMembers } = useLoaderData();
  return (
    <div >

      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} m={4}>
          <Typography variant="h3" fontWeight={600} color="text" align={"center"}>
            The Builders of Hope
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={1}
          justifyContent="space-around"
        >
          {boardMembers.map((member, i) => (
            <Grid key={i} item xs={12}  sm={5} lg={4} p={3}>
              <ViewCard family={member} crop={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

// {boardMembers.map((member, i) => (
//   <ViewCard key={i} family={member} />
// ))}