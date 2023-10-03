import { useLoaderData } from "react-router-dom";import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DragNDrop from "./DragNDrop";
import ShowFullData from "../Elements/ShowFullData";

export default function Admin() {

  const { candidates } = useLoaderData();
  const [moving, setMoving] = useState(false);
  const navigate = useNavigate();

  // if there isn't a user in the store, navigate to login screen

  return (
    <>
      <h1>Admin Page</h1>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ display: moving ? "none" : "block" }}
        onClick={() => navigate("/update-phase")}
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
      <ShowFullData candidates={candidates}/>
      
    </>
  );
}
