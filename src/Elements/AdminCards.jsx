import CandidateCard from "./CandidateCard";

const AdminCards = ({ cards }) => {
  return (
    <>
      {cards.map((candidate) => (
        <div key={candidate.candidateId}>
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        </div>
      ))}
      
    </>
  );
};

export default AdminCards;
