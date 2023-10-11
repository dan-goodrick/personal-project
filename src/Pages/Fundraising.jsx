import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";

import { LinearProgress, Grid, Typography, Button, Stack } from "@mui/material";
import Donate from "../Elements/Donate";
import { useState } from "react";
import { Background } from "./Home";



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
    <div>
      <Background/>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12} m={1}>
          <Typography variant="h5" align={"center"}>
            We build permanent homes for less than $10,000. <br/>
            Donate Today!
          </Typography>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={5}
          justifyContent="center"
          ml={-2}
        >
          {fundraising.map((candidate, i) => (
            <Grid key={i} item xs={12} sm={4} >
              <ViewCard family={candidate} crop={false} />
              <Stack sx={{ m: 1, p: 1 }}>
                <Typography variant="h5" align={"center"}>
                  Funding Progress
                </Typography>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  sx={{ p: 1, mt: 1 }}
                  value={
                    (candidate.fundsRaised / candidate.fundRequirement) * 100
                  }
                />
                <Typography variant="subtitle1" align={"center"} p={2}>
                  Raised ${candidate.fundsRaised} of $
                  {candidate.fundRequirement}
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
    </div>
  );
}
