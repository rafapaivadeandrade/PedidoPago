import React from 'react';
import { AppBar, Toolbar, Grid, IconButton, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
function Header() {
  return (
    <AppBar position="static" color="white">
      <Toolbar>
        <Grid container>
          <Grid item>hey</Grid>
          <Grid item sm={6}>
            hey
          </Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="white">
                <SearchIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
