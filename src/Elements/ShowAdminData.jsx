import CandidateCard from "./CandidateCard";
import Move from "./Move";

export default function ShowAdminData({ labels, phases}) {
  return (
    <>
      {phases.map((phase, i) => (
        <div key={i}>
          <h2>{labels[i]}</h2>
          <div>
            {phase.map((candidate) =>
                <CandidateCard key={candidate.candidateId} candidate={candidate} />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
