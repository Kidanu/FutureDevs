import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects"><h1>Projects page</h1>
        <Grid container>
          <Grid xs={12}>
            <Paper style={{ padding: '15px' }} elevation={3}>
              <Card style={{ backgroundColor: 'lightgray' }} className="ProjectCard">
                <h4>CashReport</h4>
                <p className="Summary">
                  Summary
                </p>
                <Button variant="contained" color="primary" href="https://github.com/Xarczuz/CashReportV3">
                  <GitHubIcon /> GitHub
                </Button>
              </Card>
              <Card className="ProjectCard">
                <h4>Project 2</h4>
                <p>
                  Summary
                </p>
                <Button variant="outlined" color="primary" href="">
                  <GitHubIcon /> GitHub
                </Button>
              </Card>
            </Paper>


          </Grid>
        </Grid>
      </div>
    );
  }
}
