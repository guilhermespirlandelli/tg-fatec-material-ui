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
import AccountCircle from "@mui/material/Icon";
import FormControl from "@mui/material/FormControl";
import { flexbox, height } from "@mui/system";

// const Wrapper = styled.div`
//     align-content: center;
//     position: relative;
//     display: inline;

// `;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Loginframe = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// const Button = styled.button`
//     height: 25px;
// `
export default function Home() {
  return (
    <>
      <Loginframe>
        {/* <Wrapper> */}
        <Grid container justifyContent="center">
          <Grid item md={4}>
            <Paper align="center" elevation={12}>
              <FormControl fullWidth></FormControl>
              <Container>
                <Avatar
                  alt="logo"
                  src="/logo.png"
                  sx={{ width: 100, height: 100 }}
                />
                <Grid item md={4}></Grid>
                <Grid item md={4}></Grid>
                <Grid item md={4}></Grid>
                <FormControl fullWidth></FormControl>
                <Grid item md={12}>
                  <Typography align="center" variant="h5">
                    OLHOS DO BEM
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item md={12}>
                  <Typography align="center" variant="subtitle1">
                    FAÇA SEU CADASTRO AQUI
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid container>
                  <Grid item md={12}>
                    <AccountCircle></AccountCircle>
                  </Grid>
                  <Grid item md={12}>
                    <TextField label="Email" fullWidth></TextField>
                  </Grid>
                  <Grid container>
                    <Grid item md={12}>
                      <TextField
                        label="Senha"
                        fullWidth
                        type="password"
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={12}>
                      <Button variant="contained" fullWidth>
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <FormControl fullWidth></FormControl>
              <Grid item md={12}>
                <Typography align="center" variant="subtitle1">
                  ESQUECI MINHA SENHA
                </Typography>
              </Grid>
              <FormControl fullWidth></FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Loginframe>
      {/* </Wrapper> */}
      <br />
    </>
  );
}
