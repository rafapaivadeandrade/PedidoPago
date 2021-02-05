import React from 'react';
import {
  Nav,
  LogoText,
  LogoTextLanding,
  NavLanding,
  SubLogoTextLanding,
  Period,
  SubNavLanding,
  SubTextLanding,
} from './styles';
import { IconButton, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    marginLeft: 20,
  },
  secondary: {
    marginLeft: 1150,
    color: theme.palette.secondary.main,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: '#fafafa',
    },
  },
});
function Header({ landing }) {
  if (landing) {
    return (
      <>
        <NavLanding>
          <LogoTextLanding>PEDIDOPAGO</LogoTextLanding>
          <Period>.</Period>
          <SubLogoTextLanding>Laboratório Buenos Ayres</SubLogoTextLanding>
          <IconButton disabled>
            <Badge>
              <ThemeProvider theme={theme}>
                <CustomSearchIcon />
              </ThemeProvider>
            </Badge>
          </IconButton>
          <IconButton disabled>
            <Badge>
              <ThemeProvider theme={theme}>
                <CustomCallIcon />
              </ThemeProvider>
            </Badge>
          </IconButton>
          <IconButton disabled>
            <Badge>
              <ThemeProvider theme={theme}>
                <CustomNotificationIcon />
              </ThemeProvider>
            </Badge>
          </IconButton>
          <IconButton disabled>
            <Badge
              badgeContent={22}
              color="primary"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <ThemeProvider theme={theme}>
                <CustomAssignmentIcon />
              </ThemeProvider>
            </Badge>
          </IconButton>
          <IconButton disabled>
            <Badge
              badgeContent={3}
              color="primary"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <ThemeProvider theme={theme}>
                <CustomChatIcon />
              </ThemeProvider>
            </Badge>
          </IconButton>
        </NavLanding>
        <SubNavLanding>
          <SubTextLanding>Lista de categorias</SubTextLanding>
          <Period secondPeriod={true}>.</Period>
          <SubLogoTextLanding secondSubLogo={true}>
            Catálogo {'>'}
          </SubLogoTextLanding>
          <SubLogoTextLanding secondSubLogo={true}>
            Categorias
          </SubLogoTextLanding>
        </SubNavLanding>
      </>
    );
  } else {
    return (
      <Nav>
        <LogoText>PEDIDOPAGO</LogoText>
      </Nav>
    );
  }
}
function CustomSearchIcon() {
  const classes = useStyles();
  return (
    <SearchIcon
      style={{ fontSize: 30 }}
      classes={{
        root: classes.secondary,
      }}
    />
  );
}
function CustomCallIcon() {
  const classes = useStyles();
  return (
    <CallIcon
      style={{ fontSize: 30 }}
      classes={{
        root: classes.root,
      }}
    />
  );
}
function CustomNotificationIcon() {
  const classes = useStyles();
  return (
    <NotificationsIcon
      style={{ fontSize: 30 }}
      classes={{
        root: classes.root,
      }}
    />
  );
}
function CustomAssignmentIcon() {
  const classes = useStyles();
  return (
    <AssignmentIcon
      style={{ fontSize: 30 }}
      classes={{
        root: classes.root,
      }}
    />
  );
}
function CustomChatIcon() {
  const classes = useStyles();
  return (
    <ChatIcon
      style={{ fontSize: 30 }}
      classes={{
        root: classes.root,
      }}
    />
  );
}

export default Header;
