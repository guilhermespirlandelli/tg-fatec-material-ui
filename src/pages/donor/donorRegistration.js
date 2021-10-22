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
import {mask, unMask} from 'remask'
import {useState} from 'react'
import axios from "axios";

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

function donorRegistration() {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleCpfChange = event => {
    setCpf(mask(unMask(event.target.value),['999.999.999-99']))
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const handleConfirmedPasswordChange = event => {
    setConfirmedPassword(event.target.value)
  }

  const createDonor = async() => {
    if(name === '')
      console.log("Por favor preencha seu nome.");
    if(cpf === '')
    console.log("Por favor preencha seu CPF.");
    if(email === '')
    console.log("Por favor preencha seu email.");
    if(password === '')
    console.log("Por favor preencha sua senha.");
    if(confirmedPassword === '')
    console.log("Por favor preencha confirme sua senha.");

    if(password !== confirmedPassword){
      console.log("As senhas não conferem. Por favor tente novamente.");
    }else {
      const donorToCreate = {
        name,
        cpf: unMask(cpf),
        email,
        password
      }
  
      const response = await axios.post('/api/donor/createDonor', donorToCreate)

      console.log(response.data.message);
    }
  }
  
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
                      <TextField label="Nome Completo" fullWidth value={name} onChange={handleNameChange}></TextField>
                    </SpacingBottom>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="CPF" fullWidth value={cpf} onChange={handleCpfChange}></TextField>
                    </SpacingBottom>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} justifyContent="center">
                    <SpacingBottom>
                      <TextField label="E-mail" fullWidth value={email} onChange={handleEmailChange}></TextField>
                    </SpacingBottom>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} justifyContent="center">
                      <SpacingBottom>
                        <TextField
                          label="Senha"
                          fullWidth
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                        ></TextField>
                      </SpacingBottom>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} justifyContent="center">
                      <SpacingBottom>
                        <TextField
                          label="Confirmar Senha"
                          fullWidth
                          type="password"
                          value={confirmedPassword}
                          onChange={handleConfirmedPasswordChange}
                        ></TextField>
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
                          onClick={createDonor}
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

export default donorRegistration