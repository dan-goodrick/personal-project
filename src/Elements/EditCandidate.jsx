import CandidateData from "./CandidateData";
import PersonCard from "./PersonCard";


export default function EditCandidate({ candidate, setEditCandidate, handleEditCandidate }) {
  
  // console.log("EditCandidate", candidate);
  return (
    <>
      {candidate.people.map((person, i) => <PersonCard key={i} person={person} i={i} /> )}
      <CandidateData  candidate={candidate} setEditCandidate={setEditCandidate} handleEditCandidate={handleEditCandidate} />
    </>
  );
}

