import CandidateCard from "./AdminCandidate";

const Column = ({ cards }) => {
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

export default Column;
