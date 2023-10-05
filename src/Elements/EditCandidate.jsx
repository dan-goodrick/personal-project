import CandidateData from "./CandidateData";
import PersonCard from "./PersonCard";


export default function EditCandidate({ width, candidate, setEditCandidate, handleEditCandidate }) {
  
  // console.log("EditCandidate", candidate);
  return (
    <>
      {candidate.people.map((person, i) => <PersonCard width={width} key={i} person={person} i={i} /> )}
      <CandidateData width={width} candidate={candidate} setEditCandidate={setEditCandidate} handleEditCandidate={handleEditCandidate} />
    </>
  );
}

