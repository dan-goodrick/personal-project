import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";

import {
  LinearProgress,
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { toInteger } from "lodash";
import Donate from "../Elements/Donate";
import { useState } from "react";
// import Item from "../Elements/item";

export default function Fundraising() {
  const { fundraising } = useLoaderData();
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = (candidate) => {
    console.log("candidate", candidate);
    setOpen(true);
    setTarget(candidate);
  };
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" align={"center"}>
          Current Fundraisers
        </Typography>
      </Grid>
      <Grid container item direction="row" spacing={5} justifyContent="center">
        {fundraising.map((candidate, i) => (
          <Grid key={i} item xs={12} sm={6}>
            <ViewCard family={candidate} crop={false} />
            <Stack sx={{ m: 2, p: 2 }}>
              <Typography variant="h3" align={"center"}>
                Funding Progress
              </Typography>
              <LinearProgress
                variant="determinate"
                color="primary"
                sx={{ p: 2, mt: 2 }}
                value={
                  (candidate.fundsRaised / candidate.fundRequirement) * 100
                }
              />
              <Typography variant="subtitle1" align={"center"} p={2}>
                Raised ${candidate.fundsRaised} of ${candidate.fundRequirement}
              </Typography>
              <Button
                type="submit"
                size="large"
                onClick={() => handleClick(candidate)}
              >
                Contribute
              </Button>
              <Donate open={open} setOpen={setOpen} candidate={target} />
            </Stack>
          </Grid>
        ))}
      </Grid>
      
    </Grid>
  );
}
