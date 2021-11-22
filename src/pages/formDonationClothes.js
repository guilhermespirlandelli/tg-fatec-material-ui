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

export default function formDonationClothes() {
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
                    <Typography variant="h4">Fazer Doação de Roupas</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography align="left" variant="h5">Para que sua doação possa chegar a alguém que precise com mais velocidade, pedimos por favor que descreva as peças doadas como o exemplo abaixo.</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography align="left" variant="h6">Exemplo: <br /> Roupas de Cama. 1 Lençol solteiro, 2 Cobertores casal <br /> Roupas Infantis. 5 Peças Femininas, 2 Peças Masculinas <br /> Roupas Adultas. 1 Peça Feminina, 3 Peças Masculinas <br />  </Typography>
                  </Grid>


                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      
                        <TextField
                          // id="outlined-multiline-static"
                          label="Descrição da doação de roupas"
                          multiline
                          rows={4}
                          fullWidth
                          // onChange={handleDetails}
                          // value={details}
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
                            href="/DonationOptions"
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
