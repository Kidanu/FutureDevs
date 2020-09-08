import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftDrawer from './LeftDrawer';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import './NavigationBar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigatonBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#00416d', color: '#f8bd7f' }}>
        <Toolbar>
          <LeftDrawer />
          <Typography variant="h6" className={classes.title}>
            Three Future Devs
          </Typography>
          <div className="Btns">
            <Fab variant="extended" color="secondary" style={{ marginRight: '20px', paddingRight: '15px' }}><GitHubIcon style={{ paddingRight: '10px' }} /> Projects</Fab>
            <Fab variant="extended" color="secondary" style={{ paddingRight: '15px' }}><InfoIcon style={{ paddingRight: '10px' }} /> About Us</Fab>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
