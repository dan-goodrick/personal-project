import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { Grid, Typography } from "@mui/material";
import { Background } from "./Home";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  // console.log("Planned Projects", planned)
  return (
    <div>
      <Background/>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} m={2} md={4}>
          <Typography variant="h4" align={"center"}>
            Planned Builds (January 2024)
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={3}
          justifyContent="center"
          ml={-2}
        >
          {planned.map((candidate, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <ViewCard family={candidate} crop={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>

    </div>
  );
}

// {planned.map((candidate, i) => (
//   <ViewCard key={i} family={candidate} />
//   ))}