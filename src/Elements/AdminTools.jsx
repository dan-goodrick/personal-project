import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function AdminTools({ moving, setMoving }) {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      alignItems="stretch"
      direction="row"
      justify="flex-start"
    >
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "none" : "block" }}
        onClick={() => setMoving(true)}
      >
        Move Candidates
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "block" : "none" }}
        onClick={() => setMoving(false)}
      >
        Edit Candidates
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "none" : "block" }}
        onClick={() => navigate("/newRecord")}
      >
        Add Candidate
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "none" : "block" }}
        onClick={() => navigate("/manageImages")}
      >
        Add Project Images
      </Button>
    </Grid>
  );
}
