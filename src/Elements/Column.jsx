const Column = ({ cards }) => {
  const candidates = [];
  for (const candidate of cards) {
    candidates.push(
        <li key={candidate.candidateId}>{candidate.lastName}</li>
    );
  }

  return <>{candidates}</>
};

export default Column;
