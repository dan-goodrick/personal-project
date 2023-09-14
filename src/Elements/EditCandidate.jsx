import { useEffect, useState } from "react";
import EditFamily from "./EditFamily";
import flattenObject from "../functions/flatten";
import destroyCandidate from "../functions/deleteCandidate";


export default function EditCandidate({ candidate, setEditing }) {
  // const [flatCandidate, setFlatCandidate] = useState({})
  // useEffect((candidate) => { 
  //   setFlatCandidate(flattenObject(candidate, "c"))
  //   console.log("flattening", candidate, flatCandidate);
  //  },[flatCandidate, candidate])
  console.log("EditCandidate", candidate);
// add remaining fields to edit a candidate
  return (
    <>
     <EditFamily family={candidate.people}/>
      <input type="button" value="Save" onClick={() => setEditing(false)}/>
      <input type="button" value="Delete" onClick={() => destroyCandidate(candidate.candidateId)}/>
    </>
  );
}