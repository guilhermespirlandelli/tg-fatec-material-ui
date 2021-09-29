import { Container, FormControl } from "@mui/material";
import styled from "styled-components";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import { ArrowBack, Check, Close } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import PersistentDrawerLeft from "../components/navBar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { TableHead, TableRow, TableCell, TableFooter } from "@mui/material";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const SpacingArround = styled.div`
  padding: 20px;
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
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function formReceive() {
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
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Número do Ato." fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Número do Ato." fullWidth />
                  </Grid>
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <Grid
                      container
                      spacing={5}
                      justify="center"
                      alignContent="center"
                    >
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


                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </SpacingBottom>
      </Loginframe>
    </>
  );
}
