import CandidateData from "./CandidateData";
import PersonData from "./PersonData";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditCandidate({ candidate, setEditing }) {
  const navigate = useNavigate();

  const handleSave = async (candidate) => {
    console.log("values to be saved", candidate);
    const res = await axios.put(
      `/api/candidate/auth/${candidate.candidateID}`,
      candidate
    );
    console.log("Response: ", res.data);
    const { success } = res.data;
    if (success) {
      navigate(`/admin`);
    } else {
      console.log("Error in put request");
    }
  };

  console.log("EditCandidate", candidate);
  return (
    <>
      {candidate.people.map((person) => (
        <PersonData key={person.personId} person={person} />
      ))}
      <CandidateData candidate={candidate} />
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => setEditing(false)}
      >
        Cancel
      </Button>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => handleSave(candidate)}
      >
        Save
      </Button>
    </>
  );
}

// onSubmit={(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// }}
