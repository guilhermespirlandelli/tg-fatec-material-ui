import { Container } from '@mui/material'
import styled from 'styled-components'
import {
  Grid,
  Paper,
  TextField,
} from "@mui/material";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const SpacingArround = styled.div`
  padding: 20px;  
`
const formInline = styled.div`
  padding-right: 20px;
`
const SpacingBottom = styled.div`
  padding-bottom: 20px;
`;

export default function formReceive() {
  return (<>
    <Container>
      <Grid Container justifyContent="center">
        <Grid item md={12}>
          <SpacingArround>
            <Paper elevation={6}>
              <Grid item md={12} align="center">
                <Title>Cadastro de donatário</Title>
              </Grid>
              <Grid item md={12}>
                <SpacingArround>
                  <TextField label="Nome Completo" fullWidth></TextField>
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
              <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                <SpacingArround>
                    <TextField
                      id="outlined-multiline-static"
                      label="Principais necessidades"
                      multiline
                      rows={4}

                      fullWidth
                    />
                  </SpacingArround>
                </Grid>
              </Grid>
            </Paper>
          </SpacingArround>
        </Grid>
      </Grid>
    </Container>
  </>)
}
