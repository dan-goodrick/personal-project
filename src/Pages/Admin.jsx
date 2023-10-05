import { useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import CandidateCard from "../Elements/CandidateCard";
import { styles } from "./Home";

export default function Admin() {
  const { candidates } = useLoaderData();
  const navigate = useNavigate();

  const style = styles();
  return (
    <div>
      <div className={style.bg} />
    <Grid container direction="column" spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" align={"center"}>
          Admin Page
        </Typography>
      </Grid>
      <Grid container xs={12} justifyContent={"space-around"}>
        <Button onClick={() => navigate("/update-phase")}>Edit Building Phase</Button>
        <Button onClick={() => navigate("/newRecord")}>New Candidate</Button>
        <Button onClick={() => navigate("/manageImages")}>Edit Images</Button>
      </Grid>
      <Grid
        container
        item
        direction="row"
        spacing={5}
        justifyContent="center">
        {candidates.map((candidate) => (
          <Grid item key={candidate.candidateId} >            
            <CandidateCard candidate={candidate} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    </div>
  );
}
