import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { styles } from "./Home";
import { Grid, Typography } from "@mui/material";


export default function PlannedProjects() {
  const { planned } = useLoaderData();
  // console.log("Planned Projects", planned)
  const style = styles();
  return (
    <div>
      <div className={style.bg} />
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} m={4}>
          <Typography variant="h3" align={"center"}>
            Planned Builds (January 2024)
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={5}
          justifyContent="center"
        >
          {planned.map((candidate, i) => (
            <Grid key={i} item xs={12} sm={5} mx={2}>
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