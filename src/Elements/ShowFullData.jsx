// import { useState } from "react";
import { Container, Grid } from "@mui/material";
import CandidateCard from "./CandidateCard";

export default function ShowFullData({ candidates }) {
  return (
    <Grid>
    <div>
      <h2>Incomplete Build Applications</h2>
      {candidates
        .filter((candidate) => candidate.phase.phaseId === 1)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>
      <h2>Completed Build Applications</h2>
      {candidates
        .filter((candidate) => candidate.phase.phaseId === 2)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>
      <h2>Projects in fundraising</h2>
      {candidates
        .filter((candidate) => candidate.phase.phaseId === 3)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>

      <h2>Projects in Planning</h2>
      {candidates
        .filter((candidate) => candidate.phase.phaseId === 4)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>
      <h2>Completed Projects</h2>
      {candidates
        .filter((candidate) => candidate.phase.phaseId === 5)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    </Grid>
  );
}