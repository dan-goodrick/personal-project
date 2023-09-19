import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import EditCandidate from "../Elements/EditCandidate";
import AddCandidate from "../Elements/AddCandidate";

export default function NewRecord( {candidate }) {
  const navigate = useNavigate();



  return (
    <>
      <h1>Add New Candidate</h1>
      <AddCandidate candidate={candidate} /> 


    </>
  );
}