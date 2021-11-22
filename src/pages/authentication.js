// import useStyles from 'react'
import styled from "styled-components";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";

const Loginframe = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SpacingBottom = styled.div`
  padding-bottom: 20px;
`;

export default function authentication() {
  return (
    <>
      <Loginframe>
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={5} md={5} lg={4} xl={4}>
            <Paper align="center" elevation={6}>
              <FormControl fullWidth></FormControl>
              <Container>
                <Avatar
                  alt="logo"
                  src="/logo.png"
                  sx={{ width: 100, height: 100 }}
                />
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="h5">
                    OLHOS DO BEM
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="subtitle1">
                    <a href="/registrationOptions">FAÇA SEU CADASTRO AQUI
                    </a>

                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="CPF" fullWidth></TextField>
                    </SpacingBottom>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} justifyContent="center">
                      <SpacingBottom>
                        <TextField
                          label="Senha"
                          fullWidth
                          type="password"
                        ></TextField>
                      </SpacingBottom>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button
                        size="large"
                        variant="contained"
                        fullWidth
                        color="primary"
                        href="/"
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <FormControl fullWidth></FormControl>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography align="center" variant="subtitle1">
                  <a href="/recuperation">
                    ESQUECI MINHA SENHA
                  </a>
                </Typography>
              </Grid>
              <FormControl fullWidth></FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Loginframe>
    </>
  );
}
