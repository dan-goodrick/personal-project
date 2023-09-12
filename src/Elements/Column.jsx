import Button from "@mui/material/Button";
import CandidateCard from "./Candidate";

const Column = ({ cards }) => {
  return (
    <>
      {cards.map((candidate) => (
        <div key={candidate.candidateId}>
          <Button size="small" color="primary" variant="contained">
            Edit
          </Button>
          <Button size="small" color="primary" variant="outlined">
            Delete
          </Button>
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        </div>
      ))}
    </>
  );
};

export default Column;
