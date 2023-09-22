import CandidateData from "./CandidateData";
import ShowPeople from "./ShowPeople";



export default function EditCandidate({ candidate, setEditCandidate, handleEditCandidate, updateDb }) {
  
  // console.log("EditCandidate", candidate);
  return (
    <>
      <ShowPeople people={candidate.people} updateDb={updateDb} />
      <CandidateData candidate={candidate} setEditCandidate={setEditCandidate} handleEditCandidate={handleEditCandidate} />
    </>
  );
}

