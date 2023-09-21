import CandidateData from "./CandidateData";
import ShowPeople from "./ShowPeople";



export default function EditCandidate({ candidate, setEditCandidate, handleEditCandidate }) {
  
  // console.log("EditCandidate", candidate);
  return (
    <>
      <ShowPeople people={candidate.people} />
      <CandidateData candidate={candidate} setEditCandidate={setEditCandidate} handleEditCandidate={handleEditCandidate} />
    </>
  );
}

