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
  Link,
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
const Imagem1 = styled.img`  
border-radius: 1%;
height: 250px;
width: 250px;
`;
const Imagem2 = styled.img`  
border-radius: 1%;
height: 150px;
width: 250px;
margin-top: 50px;
margin-bottom: 50px;
`;
const Imagem3 = styled.img`  
border-radius: 1%;
height: 150px;
width: 250px;
margin-top: 50px;
margin-bottom: 50px;
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
                    <Typography variant="h4">Fazer Doação</Typography>
                  </Grid>

                  <Grid item md={4} xs={12} sm={12} xl={4}>
                    <Link
                      href="/formDonationFood"
                      style={{ textDecoration: "none", color: "black" }} >
                      <Paper elevation={5}>
                        <Typography variant="h5">Alimentos</Typography>
                        <Imagem1 alt="logo" src="/Alimentos.jpg" />
                      </Paper>
                    </Link>
                  </Grid>
                  <Grid item md={4} xs={12} sm={12} xl={4}>
                    <Link
                      href="/formDonationClothes"
                      style={{ textDecoration: "none", color: "black" }} >
                      <Paper elevation={5}>
                        <Typography variant="h5">Roupas</Typography>
                        <Imagem2 alt="logo" src="/Roupas.jpg" />
                      </Paper>
                    </Link>
                  </Grid>
                  <Grid item md={4} xs={12} sm={12} xl={4}>
                    <Link
                      href="/formDonationPix"
                      style={{ textDecoration: "none", color: "black" }} >
                      <Paper elevation={5}>
                        <Typography variant="h5">Trasferência bancária</Typography>
                        <Imagem3 alt="logo" src="/Transferencia.jpg" />
                      </Paper>
                    </Link>
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
