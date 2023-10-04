// import { useState } from "react";
import {  Grid, Typography } from "@mui/material";
import CandidateCard from "./CandidateCard";

export default function ShowFullData({ candidates }) {
  return (
    <Grid>
    <div>
      <h2>Incomplete Build Applications</h2>
      {candidates
        .filter((candidate) => candidate.phaseId === 1)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>
      <h2>Completed Build Applications</h2>
      {candidates
        .filter((candidate) => candidate.phaseId === 2)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>
      <h2>Projects in fundraising</h2>
      {candidates
        .filter((candidate) => candidate.phaseId === 3)
        .map((candidate) => (
          <>
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
          <Typography>{candidate.fundsRaised}</Typography>
          <Typography>{candidate.fundRequirement}</Typography>
          </>
        ))}
        
    </div>
    <div>

      <h2>Projects in Planning</h2>
      {candidates
        .filter((candidate) => candidate.phaseId === 4)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    <div>
      <h2>Completed Projects</h2>
      {candidates
        .filter((candidate) => candidate.phaseId === 5)
        .map((candidate) => (
          <CandidateCard key={candidate.candidateId} candidate={candidate} />
        ))}
    </div>
    </Grid>
  );
}
