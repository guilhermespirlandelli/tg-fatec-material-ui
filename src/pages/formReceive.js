import { Container, FormControl } from '@mui/material'
import styled from 'styled-components'
import {
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import PersistentDrawerLeft from '../components/navBar'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const SpacingArround = styled.div`
  padding: 20px;
`
const SpacingBottom = styled.div`
  
`
const SpacingArroundButton = styled.div`
  padding: 20px;
  justify-content: space-between;
`
const Loginframe = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default function formReceive() {
  return (<>

    <Loginframe>
      <PersistentDrawerLeft />
      <Container>
        <FormControl />
        <Grid Container justifyContent="center">
          <Grid item xs={12} sm={12} md={12}>
            <FormControl />
            <Paper elevation={6}>
              <Grid item md={12} align="center">
                <Title>Cadastro de donatário</Title>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField label="Nome Completo" fullWidth sx={{
                    width: 1070,
                  }}></TextField>
                </SpacingArround>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField
                    label="Telefone"
                    sx={{
                      width: 535,
                    }}
                  />
                  <TextField
                    label="Celular"
                    sx={{
                      width: 535,
                    }}
                  />
                </SpacingArround>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField
                    label="Rua"
                    sx={{
                      width: 535,
                    }}
                  />
                  <TextField
                    label="Número"
                    sx={{
                      width: 535,
                    }}
                  />
                </SpacingArround>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField
                    label="Bairro"
                    sx={{
                      width: 535,
                    }}
                  />
                  <TextField
                    label="Complemento"
                    sx={{
                      width: 535,
                    }}
                  />
                </SpacingArround>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField
                    label="Cidade"
                    sx={{
                      width: 535,
                    }}
                  />
                  <TextField
                    select
                    label="Estado"
                    sx={{
                      width: 535,
                    }}
                  />
                </SpacingArround>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField
                    label="Número de Pessoas"
                    sx={{
                      width: 535,
                    }}
                  />
                  <TextField
                    label="Idade"
                    sx={{
                      width: 535,
                    }}
                  />
                </SpacingArround>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={12} md={12}>
                  <SpacingArround>
                    <TextField
                      id="outlined-multiline-static"
                      label="Principais necessidades"
                      multiline
                      rows={4}
                      sx={{
                        width: 1070,
                      }}
                      fullWidth
                    />
                  </SpacingArround>
                </Grid>
                <Grid item xs={12} sm={12} md={12} justifyContent="space-around">
                  <SpacingArroundButton>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: 500,
                      }}
                    >
                      SALVAR
                    </Button>

                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      sx={{
                        width: 500,
                      }}
                    >
                      VOLTAR
                    </Button>
                    
                  </SpacingArroundButton>
                </Grid>
              </Grid>
            </Paper>
            <FormControl />
          </Grid>
        </Grid>
      </Container>
    </Loginframe>
  </>)
}
