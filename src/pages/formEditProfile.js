
import { useState } from "react";
import { Container, FormControl, Select } from "@mui/material";
import styled from "styled-components";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  InputLabel,
  MenuItem,
  Avatar,
} from "@mui/material";
import { ArrowBack, Check, Close } from "@mui/icons-material";
import PersistentDrawerLeft from "../components/navBar";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const SpacingArround = styled.div`
  padding-bottom: 25px;
`;
const SpacingBottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  padding-top: 110px;
  margin-left: -60px;
`;

const Wrapper = styled.div`
  margin: theme.spacing(1);
  position: "relative";
`;
const Loginframe = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function formEditProfile() {
  const [peopleNumber, setPeopleNumber] = useState("");

  const handleChange = (event) => {
    setPeopleNumber(event.target.value);
  };

  return (
    <>
      <Loginframe>
        <PersistentDrawerLeft />
        <SpacingBottom>
          <Container>
            <Paper align="center">
              <Container>
                <Grid container spacing={5}>
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <Typography variant="h4">Editar Perfil</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography align="left" variant="h5">Dados Pessoais</Typography>
                  </Grid>
                  {/* <Grid item md={12} xs={12} sm={12} xl={12}>
                    <Avatar
                      src="/broken-image.jpg"
                      sx={{ width: 100, height: 100 }}
                    />

                  </Grid> */}

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Nome Completo" placeholder="" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="E-mail" placeholder="" fullWidth />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Telefone" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Celular" fullWidth />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Rua" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <TextField label="Número" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField label="Complemento" fullWidth />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Bairro" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Cidade" fullWidth />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Estado" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="CEP" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography align="left" variant="h5">Dados de Segurança</Typography>
                  </Grid>

                  
                    <Grid item xs={6} sm={6} md={6} justifyContent="center">
                      
                        <TextField
                          label="Nova Senha"
                          fullWidth
                          type="password"
                          // value={password}
                          // onChange={handlePasswordChange}
                        ></TextField>
                      
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} justifyContent="center">
                      
                        <TextField
                          label="Confirmar Senha"
                          fullWidth
                          type="password"
                          // value={confirmedPassword}
                          // onChange={handleConfirmedPasswordChange}
                        ></TextField>
                      
                    </Grid>
                  
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <Grid
                      container
                      spacing={5}
                      justify="center"
                      alignContent="center"
                    >
                      <Grid item xs={12} sm={12} md={3} mg={3} xl={3} />
                      <Grid item xs={12} sm={12} md={3} mg={3} xl={3}>
                        <Wrapper>
                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowBack />}
                            fullWidth
                          // onClick={backToJurisprudence}
                          >
                            Voltar
                          </Button>
                        </Wrapper>
                      </Grid>
                      <Grid item xs={12} sm={12} md={3} mg={3} xl={3}>
                        <Wrapper>
                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Check />}
                            fullWidth
                          // onClick={saveMessage}
                          >
                            Salvar
                          </Button>
                        </Wrapper>
                      </Grid>
                      <Grid item xs={12} sm={12} md={3} mg={3} xl={3} />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} mg={12} xl={12} />
                </Grid>
              </Container>
            </Paper>
          </Container>
        </SpacingBottom>
      </Loginframe>
    </>
  );
}
