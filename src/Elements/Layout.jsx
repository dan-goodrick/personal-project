import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Grid, Stack, Toolbar } from "@mui/material";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        console.log("User: ", res);
        dispatch({ type: "LOGIN", payload: res.data.userId });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid >
      <Header />
      {/* Empty Toolbar keeps the outlet from sitting behind the header */}
      <Toolbar />
      <Outlet />
    </Grid>
  );
};

export default Layout;
