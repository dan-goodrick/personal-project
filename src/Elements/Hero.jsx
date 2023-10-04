import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const styles = makeStyles((theme) => ({
  hero: {
    height: "100%",
    backgroundImage: `url(/landscape.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    margin: -24,
    padding: 24,
    color: theme.palette.text.primary,
  }
}));

export default function Hero() {
  const [zoom, setZoom] = useState(false);
  useEffect(() => setZoom(true), []);
  const style = styles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper className={style.hero}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "20vh" }}
      >
      <Zoom in={zoom} timeout={1000}>
        <Box
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant={mobile ? "h3" : "h1"}
            sx={{ m: 4, fontWeight: 700 }}
          >
            Builders of Hope
          </Typography>
          <Typography variant={mobile ? "h6" : "h4"} sx={{ m: 4 }}>
            Building Hope for a Brighter Future
          </Typography>
          {/* <Button
            variant="text"
            size="large"
            color="inherit"
            sx={{ m: 2, textTransform: "none" }}
          >
            Get Involved
          </Button> */}
        </Box>
      </Zoom>
      </Grid>
    </Paper>
  );
}
