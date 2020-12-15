import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Grid from '@material-ui/core/Grid';

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM DATA FOR BACKEND //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <ThemeProvider>
        <>
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <Typography variant="h6">Confirm User Data</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ marginTop: 80 }}>
            <Grid container spacing={4} justify='center' >
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            </Grid>
            <br />
            <Button
              style={{ marginRight: 10 }}
              size="medium"
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
              onClick={this.continue}
            >
              Confirm & Continue
            </Button>
            <Button
              size="medium"
              variant="contained"
              endIcon={<BackspaceIcon />}
              onClick={this.back}
            >
              Back
            </Button>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default Confirm;
