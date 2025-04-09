import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "../mui";
import Header from "./Header";
import Footer from "./Footer";
import Inputs from "./Inputs";
import { useLoginUser } from "../../hooks";

const defaultTheme = createTheme();

export default function Login({ handleSetCookie }) {
  const handleSubmit = useLoginUser({handleSetCookie});

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Header />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Inputs />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Footer />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
