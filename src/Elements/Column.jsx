const Column = ({ cards }) => {
  const candidates = [];
  for (const candidate of cards) {
    candidates.push(
      <div>
        <li key={candidate.candidateId}>{candidate.lastName}</li>
      </div>
    );
  }

  return <div>{candidates}</div>;
};

export default Column;
