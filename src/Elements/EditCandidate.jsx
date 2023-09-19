import CandidateData from "./CandidateData";
import IteratePeople from "./IteratePeople";



export default function EditCandidate({ candidate, setEditCandidate }) {
  
  console.log("EditCandidate", candidate);
  return (
    <>
      <IteratePeople people={candidate.people} />
      <CandidateData candidate={candidate} setEditCandidate={setEditCandidate}/>
    </>
  );
}

