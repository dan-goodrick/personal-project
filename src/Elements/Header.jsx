// import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Divider,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ChevronRight, Menu } from "@mui/icons-material";

const navLinks = [
  {
    name: "Current Fundraiser",
    shortName: "Fundraiser",
    route: "/fundraising",
  },
  { name: "Upcoming Projects", shortName: "Upcoming", route: "/plannedBuilds" },
  { name: "Completed Builds", shortName: "Completed", route: "/pastProjects" },
  { name: "About Us", shortName: "About", route: "/aboutUs" },
];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const userId = useSelector((state) => state.userId);

  const handleLogout = () => {
    axios
      .delete("/api/logout")
      .then(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((err) => console.error("Logout Error", err));
  };

  return (
    <AppBar position="sticky" color="default" >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href="/">
            <Avatar sx={{ mx: 2 }} src={"/logo.webp"} />
          </Link>
          <Hidden smDown>
            {navLinks.map((item) => (
              <ListItem key={item.name}>
                <Link href={item.route}>
                  <Typography>{item.name}</Typography>
                </Link>
              </ListItem>
            ))}
            {userId ? (
              <>
                <ListItem>
                  <Link href="/admin"><Typography>Admin</Typography></Link>
                </ListItem>
                <ListItem>
                  <Button
                    sx={{ mx: 4, textTransform: 'none'  }}
                    variant="text"
                    color="inherit"
                    onClick={handleLogout}
                  >
                    <Typography>Logout</Typography>
                  </Button>
                </ListItem>
              </>
            ) : (
              <ListItem>
                <Link href="/login"><Typography>Login</Typography></Link>
              </ListItem>
            )}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <Menu sx={{ mx: 2 }}/>
            </IconButton>
          </Hidden>
        </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.name}>
              <Link href={item.route}>
                <Typography>{item.shortName}</Typography>
              </Link>
            </ListItem>
          ))}
          {userId ? (
            <>
              <ListItem>
                <Link href="/admin">
                  <Typography>Admin</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={handleLogout}><Typography>Logout</Typography></Link>
              </ListItem>
            </>
          ) : (
            <ListItem>
              <Link href="/login"><Typography>Login</Typography></Link>
            </ListItem>
          )}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
