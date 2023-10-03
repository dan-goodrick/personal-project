import { useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ShowFullData from "../Elements/ShowFullData";

export default function Admin() {

  const { candidates } = useLoaderData();
  const navigate = useNavigate();

  // if there isn't a user in the store, navigate to login screen

  return (
    <>
      <h1>Admin Page</h1>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => navigate("/update-phase")}
      >
        Move Candidates
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => navigate("/newRecord")}
      >
        Add Candidate
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => navigate("/manageImages")}
      >
        Add Project Images
      </Button>    
      <ShowFullData candidates={candidates}/>
      
    </>
  );
}
