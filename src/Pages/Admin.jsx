import { useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import CandidateCard from "../Elements/CandidateCard";
import { Background } from "./Home";

export default function Admin() {
  const { candidates } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <Background/>
    <Grid container direction="column" spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" align={"center"}>
          Admin Page
        </Typography>
      </Grid>
      <Grid container justifyContent={"space-around"}>
        <Button onClick={() => navigate("/update-phase")}>Edit Building Phase</Button>
        <Button onClick={() => navigate("/newRecord")}>New Candidate</Button>
        <Button onClick={() => navigate("/editAboutUs")}>Member Profiles</Button>
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
