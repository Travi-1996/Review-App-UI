import React, {useRef, useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from "@material-ui/core";
import { UserMenu } from "./userMenu/UserMenu";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

const useStyles = makeStyles((theme) => ({
  topDrawerContent: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  mainContent: {
    width: ({ drawerWidth }) =>
      drawerWidth ? `calc(100% - ${drawerWidth}px)` : "100%",
  },
  childrenData: {
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
    display: "flex",
    position: "relative",
    minWidth: ({childrenWidth}) => childrenWidth,
  },
  userMenu: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
  logo: {
    width: 60,
    height: 60,
    "& path": {
      fill: "#fff",
    },
  },
  headerContent: {
    backgroundColor: "green !important",
  },
}));

export default function AppMain({ children }) {
  const [open, setOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const headerRef = useRef()
  console.log("🚀 ~ file: AppMain.js:66 ~ AppMain ~ headerRef:", headerRef)
  const childrenWidth = (headerRef?.current?.offsetWidth || 1500) - 100
  console.log("🚀 ~ file: AppMain.js:65 ~ AppMain ~ childrenWidth:", childrenWidth)
  const classes = useStyles({ drawerWidth, childrenWidth });
  const handleDrawerOpen = () => {
    setOpen(true);
    setDrawerWidth(240);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setDrawerWidth(0);
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        style={{ width: `calc(100% - ${drawerWidth}px)` }}
        className={classes.headerContent}
        open={open}
        ref={headerRef}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <Logo className={classes.logo} />
          </Typography>
          <div className={classes.userMenu}>
            <UserMenu />
          </div>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className={classes.topDrawerContent}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.mainContent} open={open}>
        <div className={classes.topDrawerContent} />
        <div className={classes.childrenData}>{children}</div>
      </div>
    </Box>
  );
}
