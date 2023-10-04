import { useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ShowFullData from "../Elements/ShowFullData";
import "./../css/style.css";
import { Container, Grid } from "@mui/material";

export default function Admin() {

  const { candidates } = useLoaderData();
  const navigate = useNavigate();

  // if there isn't a user in the store, navigate to login screen

  return (
    <Container >
      <h1>Admin Page</h1>
    <Grid>
      <Button

        onClick={() => navigate("/update-phase")}
      >
        Move Candidates
      </Button>
      <Button

        onClick={() => navigate("/newRecord")}
      >
        Add Candidate
      </Button>
      <Button

        onClick={() => navigate("/manageImages")}
      >
        Add Project Images
      </Button>    
    </Grid>
      <ShowFullData candidates={candidates}/>
      
    </Container>
  );
}
