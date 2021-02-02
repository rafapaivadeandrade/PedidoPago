import React from 'react';
import { Nav, LogoText } from './styles';
import { AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import Box from '@material-ui/core/Box';
function Header() {
  return (
    <Nav>
      <LogoText>PEDIDOPAGO</LogoText>
    </Nav>
  );
}

export default Header;
{
  /* <IconButton>
<Badge badgeContent={4} color="white">
  <SearchIcon />
</Badge>
</IconButton> */
}
