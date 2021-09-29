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

const SpacingArroundButton = styled.div`
  padding: 20px;
  justify-content: space-between;
`;
const Loginframe = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function receive() {
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
                    <Typography variant="h4">Donatários</Typography>
                  </Grid>
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <TextField
                      label="Localizar donatário"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="center">Telefone</TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                      {.searchedEntrypointsmap(
                        (element: '', index: '') => (
                          <TableRow
                            key={element.id}
                            hover
                            onClick={() => {
                              handleSelectedChips(index);
                            }}
                          >
                            <TableCell>{element.name}</TableCell>
                            <TableCell align="center">
                              <Typography variant="subtitle2">
                                {element.method.name}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography variant="subtitle2">
                                {element.actiontype.name}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody> */}
                        <TableFooter>
                          <TableRow>
                            {/* <TablePagination></TablePagination> */}
                          </TableRow>
                        </TableFooter>
                      </Table>
                    </TableContainer>
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
