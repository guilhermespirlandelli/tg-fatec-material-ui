// import useStyles from 'react'
import styled from "styled-components";
import {
  Link,
  Button,
  Container,
  Grid,
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

export default function recuperation() {
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
                    <Link href="/authentication">
                      <Close color="inherit" />
                    </Link>
                  </CloseStyle>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="h5">
                    ENCONTRE SUA CONTA
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="subtitle1">
                    Insira seu e-mail para procurar a sua conta
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="E-mail" fullWidth></TextField>
                    </SpacingBottom>
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
                          Pesquisar
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
