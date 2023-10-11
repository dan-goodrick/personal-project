import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Grow,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";


const Hooray = styled('div')({
  backgroundImage: `url(https://buildersofhope.s3.us-west-2.amazonaws.com/hoorah.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100vw",
  minHeight: '100vh'

});
export default function OrderSuccess() {
  const [grow, setGrow] = useState(false);
  useEffect(() => setGrow(true), []);
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (

    <Hooray >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "20vh" }}
      >
        <Grow in={grow} timeout={1000}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant={mobile ? "h5" : "h3"}
              sx={{ m: 4, fontWeight: 700 }}
            >
              Thanks for your tax deductible contribution to the Builders of
              Hope!
            </Typography>
            <Button color="inherit" onClick={() => navigate("/fundraising")}>
              Return to Fundraising
            </Button>
            <Button color="inherit" onClick={() => navigate("/")}>
              To Home
            </Button>
          </Box>
        </Grow>
      </Grid>
    </Hooray>
  );
}
