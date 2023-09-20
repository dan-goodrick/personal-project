import CandidateData from "./CandidateData";
import IteratePeople from "./IteratePeople";



export default function EditCandidate({ candidate, setEditCandidate, setNewCandidate }) {
  
  console.log("EditCandidate", candidate);
  return (
    <>
      <IteratePeople people={candidate.people} />
      <CandidateData candidate={candidate} setEditCandidate={setEditCandidate} setNewCandidate={setNewCandidate} />
    </>
  );
}

