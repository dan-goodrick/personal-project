import { Grid } from "@mui/material";
import CandidateCard from "./CandidateCard";
import SelectCard from "./SelectCard";
import AddButton from "./AddButton";

const AdminCards = ({ cards, moving, addButton }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {addButton ? <AddButton /> : null}
      {cards.map((candidate) =>
        moving ? (
          <SelectCard key={candidate.candidateId} candidate={candidate} />
        ) : (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        )
      )}
    </Grid>
  );
};

export default AdminCards;
