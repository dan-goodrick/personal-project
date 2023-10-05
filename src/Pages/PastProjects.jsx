import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { styles } from "./Home";
import { Grid, Typography } from "@mui/material";

export default function PastProjects() {
  const { projects } = useLoaderData();
  const style = styles();
  return (
    <div>
      <div className={style.bg} />
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} m={4}>
          <Typography variant="h3" align={"center"}>
            Completed Projects
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={5}
          justifyContent="center"
        >
          {projects.map((candidate, i) => (
            <Grid key={i} item xs={12} sm={5} mx={2}>
              <ViewCard family={candidate} crop={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
