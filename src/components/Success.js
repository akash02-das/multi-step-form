import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const Success = () => {
    return (
      <ThemeProvider>
        <>
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <Typography variant="h6">Success</Typography>
            </Toolbar>
          </AppBar>
          <div style={{ marginTop: 80 }}>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </div>
        </>
      </ThemeProvider>
    );
  }

export default Success;
