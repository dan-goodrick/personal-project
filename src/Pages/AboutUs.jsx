import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import { styles } from "./Home";
import { Grid, Typography } from "@mui/material";

export default function AboutUs() {
  const { boardMembers } = useLoaderData();
  const style = styles();
  return (
    <div >
      <div className={style.bg} />
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12} m={4}>
          <Typography variant="h3" fontWeight={600} color="text" align={"center"}>
            What our volunteers are saying
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={5}
          justifyContent="center"
        >
          {boardMembers.map((member, i) => (
            <Grid key={i} item xs={12} sm={3} mx={2}>
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