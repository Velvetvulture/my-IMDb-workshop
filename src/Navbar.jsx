import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { GoogleLogout } from "react-google-login";
import SearchResults from "./Components/SearchResults.jsx";
import styled from "styled-components";

const SearchResultsOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const GoogleSignoutButton = styled.button`
  border: 0;
  background-color: transparent;
  font-family: inherit;
  font-size: 100%;
  color: rgba(0, 0, 0, 0.87);
  padding: 0;
  outline: none;
`;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  title: {
    display: "none",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontWeight: "bold",
    border: "1px solid yellow",
    paddingRight: "4px",
    paddingLeft: "4px",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    zIndex: 1,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "53ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const query = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleFocus = (val) => {
    setFocus(val);
  };
  const handleLogout = () => {
    dispatch({ type: "logout" });
    setAnchorEl(null);
    handleMobileMenuClose();
    history.push("/");
  };
  const handleQuery = (evt) => {
    dispatch({ type: "query", q: evt.target.value });
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>
        <GoogleLogout
          clientId="669951768244-65rl7af968rsae2bfmm1ctk1n0li4g05.apps.googleusercontent.com"
          render={(renderProps) => (
            <GoogleSignoutButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign out
            </GoogleSignoutButton>
          )}
          buttonText="Logout"
          onLogoutSuccess={() => console.log("logout success")}
          onFailure={() => console.log("logout failure")}
        />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="relative" // Initially "static" but static is below relative
        style={{
          backgroundColor: "black",
          height: "58px",
          padding: "0 160px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          >
            IMDb
          </Typography>
          <div className={classes.search} style={{ width: "530px" }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              type="text"
              onChange={handleQuery}
              onFocus={() => handleFocus(true)}
              value={query}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            {focus && (
              <>
                <SearchResults clicked={() => handleFocus(false)} />
                <SearchResultsOverlay onClick={() => handleFocus(false)} />
              </>
            )}
          </div>
          <div className={classes.grow} />
          {isLoggedIn ? (
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={props.watchlistSize} color="secondary">
                  {/* <MailIcon /> */}
                  <svg
                    width="28"
                    height="28"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                    onClick={() => history.push("/watchlist")}
                  >
                    <path
                      d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Badge>
              </IconButton>
              {/* <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                className={classes.title}
                style={{
                  textTransform: "none",
                  fontSize: "0.95rem",
                  border: "none",
                  borderRadius: "30px",
                  padding: "8px 4px",
                  margin: "0px",
                }}
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <Button
              color="inherit"
              className={classes.title}
              style={{
                textTransform: "none",
                fontSize: "0.95rem",
                border: "none",
              }}
              onClick={() => history.push("/login")}
            >
              Sign in
            </Button>
          )}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
