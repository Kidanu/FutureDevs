import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import ArmenA from '../Images/Avatars/ArmenA.png';
import TobiasBild from '../Images/Avatars/TobiasBild.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './OurAvatars.css';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
    },
  },

  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (

    <div className="OurAvatars"><h1>This is us</h1>
      <div className="OurAvatarPics">
        <Card style={{ backgroundColor: '#00416d' }} className="ProfileCard">
          <Avatar className={classes.large}>C</Avatar>
          <Typography variant="h6" style={{ color: '#f8bd7f' }}>Chjun-Chi</Typography>
          <Typography variant="h6" style={{ color: '#f8bd7f' }}>Chiu</Typography>
          <div className="ProfileBtn">
            <Fab variant="extended" color="primary" href="www.linkedin.com/in/chjun-chi-chiu-9b2115179/"><LinkedInIcon />View Profile</Fab>
          </div>
        </Card>
        <div>

          <Card style={{ backgroundColor: '#00416d' }} className="ProfileCard">
            <Avatar alt="Tobias Mindell" src={TobiasBild} className={classes.large} />
            <Typography variant="h6" style={{ color: '#f8bd7f' }}>Tobias</Typography>
            <Typography variant="h6" style={{ color: '#f8bd7f' }}>Mindell</Typography>
            <div className="ProfileBtn">
              <Fab variant="extended" color="primary" href="www.linkedin.com/in/tobias-mindell-kidanu-b9a052160/"><LinkedInIcon />View Profile</Fab>
            </div>
          </Card >

        </div>
        <div>
          <Card style={{ backgroundColor: '#00416d' }} className="ProfileCard">
            <Avatar alt="Armen Aleksandrian" src={ArmenA} className={classes.large} />
            <Typography variant="h6" style={{ color: '#f8bd7f' }}>Armen</Typography>
            <Typography variant="h6" style={{ color: '#f8bd7f' }}>Aleksandrian</Typography>
            <div className="ProfileBtn">
              <Fab variant="extended" color="primary" href="https://www.linkedin.com/in/armen-aleksandrian-45474149/"><LinkedInIcon /> View Profile</Fab>
            </div>
          </Card >
        </div>
      </div>
    </div>
  );
}
