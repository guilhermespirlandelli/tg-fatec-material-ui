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

export default function formReceive() {
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
            <Paper>
              <Container>
                <Grid container spacing={5}>
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <Typography variant="h4">Cadastro de Donatários</Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField label="Nome Completo" placeholder="TESTANDO" fullWidth />
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

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Número de pessoas
                      </InputLabel>
                      <Select
                      
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={peopleNumber}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                      >
                        
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={1} >1 (um)</MenuItem>
                        <MenuItem value={2}>2 (dois)</MenuItem>
                        <MenuItem value={3}>3 (três)</MenuItem>
                        <MenuItem value={4}>4 (quatro)</MenuItem>
                        <MenuItem value={5}>5 (cinco ou mais)</MenuItem>
                        
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} />

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Nome" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <TextField label="Idade" fullWidth />
                  </Grid>

                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Gênero
                      </InputLabel>
                      <Select
                        alignContent="right"
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={peopleNumber}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={6}>1 (um)</MenuItem>
                        <MenuItem value={7}>2 (dois)</MenuItem>
                        <MenuItem value={8}>3 (três)</MenuItem>
                        <MenuItem value={9}>4 (quatro)</MenuItem>
                        <MenuItem value={10}>5 (cinco ou mais)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Principais necessidades"
                    />
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
