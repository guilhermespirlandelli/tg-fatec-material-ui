import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Assignment,
  PendingActions,
  People,
  Assessment,
  ViewList,
  AccountCircle,
  Redeem,
  Logout,
  FavoriteBorder,
} from "@mui/icons-material";
import Link from "@mui/material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
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
          <Typography variant="h6" noWrap component="div">
            OLHOS DO BEM
          </Typography>
        </Toolbar>
      </AppBar>
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {['Area1', 'Area2', 'Area3', 'Area4'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          <a
            href="/formReceive"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Cadastro de Donat??rios">
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Cadastro de Donat??rios" />
            </ListItem>
          </a>
          <a href="/grantee/granteeList" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key="Donat??rios">
              <ListItemIcon>
                <ViewList />
              </ListItemIcon>
              <ListItemText primary="Donat??rios" />
            </ListItem>
          </a>
          <a
            href="/grantee/openedGrantees"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Donat??rios Pendentes">
              <ListItemIcon>
                <PendingActions />
              </ListItemIcon>
              <ListItemText primary="Donat??rios Pendentes" />
            </ListItem>
          </a>
          <a
            href="/openedDonor"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Doa????es Pendentes">
              <ListItemIcon>
                <FavoriteBorder />
              </ListItemIcon>
              <ListItemText primary="Doa????es Pendentes" />
            </ListItem>
          </a>
          <a
            href="/formAdmReport"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Relat??rios">
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Relat??rios" />
            </ListItem>
          </a>
        </List>
        <Divider />
        <List>
          <a
            href="/formEditProfile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Editar Perfil">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Editar Perfil" />
            </ListItem>
          </a>
          <a
            href="/DonationOptions"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Fazer Doa????o">
              <ListItemIcon>
                <Redeem />
              </ListItemIcon>
              <ListItemText primary="Fazer Doa????o" />
            </ListItem>
          </a>
          <a
            href="/formReport"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Minhas Doa????es">
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Minhas Doa????es" />
            </ListItem>
          </a>
        </List>
        <Divider />
        <List>
          <a
            href="/authentication"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key="Sair">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </a>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
