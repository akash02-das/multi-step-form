import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import BackspaceIcon from '@material-ui/icons/Backspace';

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <ThemeProvider>
        <>
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <Typography variant="h6">Enter Personal Details</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ marginTop: 100 }}>
            <TextField
              style={{ marginBottom: 20 }}
              variant="outlined"
              label="Occupation"
              placeholder="Software Engineer"
              defaultValue={values.occupation}
              onChange={handleChange("occupation")}
            />
            <br />
            <TextField
              style={{ marginBottom: 20 }}
              variant="outlined"
              label="City"
              placeholder="Dhaka"
              defaultValue={values.city}
              onChange={handleChange("city")}
            />
            <br />
            <TextField
              style={{ marginBottom: 20 }}
              variant="outlined"
              label="Bio"
              placeholder="Enter your bio"
              defaultValue={values.bio}
              onChange={handleChange("bio")}
            />
            <br />
            <Button
              style={{marginRight: 10}}
              size="medium"
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
              onClick={this.continue}
            >
              Continue
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

export default FormPersonalDetails;
