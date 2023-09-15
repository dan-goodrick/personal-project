import CandidateData from "./CandidateData";
import PersonData from "./PersonData";
import Button from "@mui/material/Button";

export default function CandidateEdit({ candidate, setEditing }) {
  console.log("EditCandidate", candidate);
  return (
    <>
      {candidate.people.map((person) => (
        <PersonData key={person.personId} person={person} />
      ))}
      <CandidateData candidate={candidate} />
      <Button size="small" color="primary" variant="contained" onClick={() => setEditing(false)}>Save</Button>
    </>
  );
}

// onSubmit={(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// }}