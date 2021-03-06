import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

const ContainerUl = styled.ul`
  padding-top: 10px;
  text-align: center;
  list-style: none;
  font-family: "Abril Fatface", cursive;
  position: absolute;
  right: 0;
  &:hover {
    color: #282c34;
  }
`;

const ContainerLi = styled.li`
  display: inline;
  padding-right: 50px;

  &:hover {
    color: #282c34;
  }
`;
const ContainerLogo = styled.li`
  display: inline;
  padding-right: 50px;
  text-align: left;

  &:hover {
    color: #282c34;
  }
`;
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const Menu: React.FunctionComponent = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // RESPONSIVENESS
  const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 900 });
    return isMobile ? children : null;
  };
  const Default = ({ children }: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 901 });
    return isNotMobile ? children : null;
  };

  return (
    <div className="menu-heading">
      <Mobile>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            color="transparent"
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key="home">
                <NavLink className="link" to="/home">
                  <p className="menu-heading"> Home </p>
                </NavLink>
              </ListItem>
              <ListItem button key="treatment">
                <NavLink className="link" to="/treatment">
                  <p className="menu-heading"> Book now </p>
                </NavLink>
              </ListItem>
              <ListItem button key="treatment">
                <NavLink className="link" to="/contact">
                  <p className="menu-heading"> Contact </p>
                </NavLink>
              </ListItem>
              <Divider />
            </List>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
          </main>
        </div>
      </Mobile>
      <Default>
        <div>
          <ContainerUl>
            <ContainerLogo>
              {" "}
              <NavLink className="menu-heading" to="/home">
                Home
              </NavLink>{" "}
            </ContainerLogo>
            <ContainerLi>
              {" "}
              <NavLink className="menu-heading" to="/contact">
                Contact
              </NavLink>{" "}
            </ContainerLi>
          </ContainerUl>
        </div>
      </Default>
    </div>
  );
};

export default Menu;
