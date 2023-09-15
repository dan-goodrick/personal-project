import destroyCandidate from "../functions/deleteCandidate";
import CandidateData from "./CandidateData";
import PersonData from "./PersonData";

export default function CandidateEdit({ candidate, setEditing }) {
  console.log("EditCandidate", candidate);
  return (
    <>
      {candidate.people.map((person) => (
        <PersonData key={person.personId} person={person} />
      ))}
      <CandidateData candidate={candidate} />
      <input type="button" value="Save" onClick={() => setEditing(false)} />
      <input
        type="button"
        value="Delete"
        onClick={() => destroyCandidate(candidate.candidateId)}
      />
    </>
  );
}

// onSubmit={(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 400);
// }}