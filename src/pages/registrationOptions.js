// import useStyles from 'react'
import styled from "styled-components";
import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  FormControl,
} from "@mui/material";

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
  padding-left: 95%;
`;

export default function Home() {
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
                    <Close />
                  </CloseStyle>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="h5">
                    Você deseja doar ou receber doação?
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography align="center" variant="subtitle1">
                    Escolha uma opção abaixo
                  </Typography>
                </Grid>
                <FormControl fullWidth></FormControl>
                <Grid container>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <SpacingBottom>
                        <Button
                          size="large"
                          variant="contained"
                          fullWidth
                          color="primary"
                        >
                          DOAR
                        </Button>
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
                      >
                        RECEBER DOAÇÃO
                      </Button>
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
