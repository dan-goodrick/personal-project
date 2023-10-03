// import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  Container,
  Divider,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
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

const useStyles = makeStyles(() => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
    backgroundColor: "black",
    borderRadius: 0,
    height: 30,
    border: "2px solid black",
  },
}));

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const styles = useStyles();
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
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Avatar src={"/logo.webp"} href="/" className={styles.avatar} />
          <Hidden smDown>
            {navLinks.map((item) => (
              <ListItem key={item.name}>
                <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.route}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
            {userId ? (
              <>
                <ListItem>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/admin"
                  >
                    Admin
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </ListItem>
              </>
            ) : (
              <ListItem>
                <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href="/login"
                >
                  Log in
                </Link>
              </ListItem>
            )}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
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
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.route}
              >
                {item.shortName}
              </Link>
            </ListItem>
          ))}
            {userId ? (
              <>
                <ListItem>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    href="/admin"
                  >
                    Admin
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    className={styles.link}
                    color="textPrimary"
                    variant="button"
                    underline="none"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </ListItem>
              </>
            ) : (
              <ListItem>
                <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href="/login"
                >
                  Log in
                </Link>
              </ListItem>
            )}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
