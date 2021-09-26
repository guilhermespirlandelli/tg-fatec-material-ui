// import useStyles from 'react'
import styled from "styled-components";
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { Close } from "@mui/icons-material";

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

const CloseStyle = styled.div`
  padding-left: 97%;
  padding-bottom: 20px;
`;

export default function registrationReceive() {
  return (
    <>
      <Loginframe>
        <Grid container justifyContent="center">
          <Grid item xs={11} sm={5} md={5} lg={4} xl={4}>
            <Paper align="center" elevation={6}>
              <FormControl fullWidth></FormControl>
              <Container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <CloseStyle>
                    <Link href="/registrationOptions">
                      <Close color="inherit" />
                    </Link>
                  </CloseStyle>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="h5">
                    CADASTRE-SE
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="subtitle1">
                    É rápido e fácil.
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="Nome Completo" fullWidth></TextField>
                    </SpacingBottom>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="Telefone" fullWidth></TextField>
                    </SpacingBottom>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="Celular" fullWidth></TextField>
                    </SpacingBottom>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                      <SpacingBottom>
                        <TextField
                          id="outlined-multiline-static"
                          label="Fale um pouco sobre você"
                          multiline
                          rows={4}

                          fullWidth
                        />
                      </SpacingBottom>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <SpacingBottom>
                        <Button
                          size="large"
                          variant="contained"
                          fullWidth
                          color="primary"
                          multiline
                          maxRows={4}
                        >
                          Cadastre-se
                        </Button>
                      </SpacingBottom>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <FormControl fullWidth></FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Loginframe>
    </>
  );
}
