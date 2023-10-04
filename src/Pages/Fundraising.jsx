import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";

import { Stack, LinearProgress, Grid,  } from "@mui/material";

export default function Fundraising() {
  const { fundraising } = useLoaderData();

  return (
    <>
      <h1>Current Fundraisers</h1>
      <Stack spacing={2} direction="row" >
      {fundraising.map((candidate, i) => (
        <Stack key={i} maxWidth={"md"} spacing={2}>
          <ViewCard family={candidate} />
          <LinearProgress
                    sx={{ '& .MuiLinearProgress-bar': { transition: 'none' } }}
                    variant='determinate'
                    color='primary'
                    value={50}
                  />
        </Stack>
      ))}
      </Stack>
    </>
  );
}
