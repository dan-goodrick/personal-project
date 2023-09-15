import destroyCandidate from "../functions/deleteCandidate";
import CandidateForm from "./CandidateForm";
import EditPerson from "./EditPerson";

export default function CandidateEdit({ candidate, setEditing }) {
  console.log("EditCandidate", candidate);
  return (
    <>
     {candidate.people.map((person) => <EditPerson key={person.personId} person={person}/>)}
     <CandidateForm candidate={candidate}/>
      <input type="button" value="Save" onClick={() => setEditing(false)}/>
      <input type="button" value="Delete" onClick={() => destroyCandidate(candidate.candidateId)}/>
    </>
  );
}