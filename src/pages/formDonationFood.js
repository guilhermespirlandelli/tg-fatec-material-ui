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
  /* height: 100vh; */
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function formDonationFood() {
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
                    <Typography variant="h4">Fazer Doação de Alimentos</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography align="left" variant="h5">Cesta Básica R$ 75,00 <br></br> (Arroz 5k, Feijão 2k, Açucar 5kg, 1Kg Sal, 1 Macarrão, 2 Molhos de tomate, 2 Litros de óleo, 1 Fubá mimoso, 1 Caldo de galinha)</Typography>
                  </Grid>

                  
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Typography align="right" variant="h6">Deseja doar quantas Cestas Básicas?</Typography>
                    </Grid>
                    
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <TextField align="left" size="small" type="number"></TextField>
                    </Grid>

                    <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                      <Button
                        // align="right"
                        variant="contained"
                        color="primary"
                      // endIcon={<ArrowBack />}
                      // fullWidth

                      >
                        CONFIRMAR
                      </Button>
                    </Grid>
                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1} />
                  

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography align="left" variant="h5">Para confirmar sua doação de XX Cestas Básicas clique em "SALVAR".</Typography>
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
