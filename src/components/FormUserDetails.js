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

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
              <Typography variant="h6">Enter User Details</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ marginTop: 100 }}>
            <TextField
              style={{ marginBottom: 20 }}
              variant="outlined"
              label="First Name"
              placeholder="John"
              defaultValue={values.firstName}
              onChange={handleChange("firstName")}
            />
            <br />
            <TextField
              style={{ marginBottom: 20 }}
              variant="outlined"
              label="Last Name"
              placeholder="Doe"
              defaultValue={values.lastName}
              onChange={handleChange("lastName")}
            />
            <br />
            <TextField
              style={{ marginBottom: 20 }}
              variant="outlined"
              label="Email"
              type="email"
              placeholder="John@example.com"
              defaultValue={values.email}
              onChange={handleChange("email")}
            />
            <br />
            <Button
              size="medium"
              variant="contained"
              endIcon={<SendIcon />}
              color="primary"
              onClick={this.continue}
            >
              Continue
            </Button>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default FormUserDetails;
