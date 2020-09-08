import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import ArmenA from '../Images/Avatars/ArmenA.png';
import TobiasBild from '../Images/Avatars/TobiasBild.png';

import './OurAvatars.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
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
        <div className={classes.root}>
          <Avatar className={classes.purple}>C</Avatar>
          <Avatar alt="Armen Aleksandrian" src={TobiasBild} className={classes.large} />
          <Avatar alt="Armen Aleksandrian" src={ArmenA} className={classes.large} />
        </div>
      </div >
    </div>
  );
}
