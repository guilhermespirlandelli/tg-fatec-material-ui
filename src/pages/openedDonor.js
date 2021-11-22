import { Container, FormControl } from "@mui/material";
import styled from "styled-components";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Link,
} from "@mui/material";
import DataGrid from "../components/Datagrid";
import { Search } from "@mui/icons-material";
import PersistentDrawerLeft from "../components/navBar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
  TableBody,
} from "@mui/material";
import { resolveHref } from "next/dist/shared/lib/router/router";

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

const pessoas = {
  nome: ["Guilherme Magalhães Spirlandelli", "Daniel Santos Lima"],
  telefone: ["(16) 3722-1234", "(16) 3721-4321"],
  celular: ["(16) 9999-0000", "(16) 9999-9999"],
  id: [0, 1],
};

export default function openedDonor() {

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
                    <Typography variant="h4">Doações Pendentes</Typography>
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
                    <DataGrid
                      count={5}
                      page={1}
                      rowsPerPage={5}
                      gridHeaders={[
                        {
                          field: "name",
                          headerName: "Nome"
                        },
                        {
                          field: "phone",
                          headerName: "Telefone",
                          align: "center"
                        }
                      ]}
                      // gridData={openedGrantees}
                      // onPageChange={handlePageChange}
                      // onRowsPerPageChange={handleRowsPerPage}
                      // onSelectedRow={editGrantee}

                    />
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
