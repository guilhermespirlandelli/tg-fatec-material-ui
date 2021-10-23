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
import PersistentDrawerLeft from "../../../components/navBar";
import defaultPrisma from '../../../../prismaConfig'
import {mask, unMask} from 'remask'
import Router from 'next/router'
import axios from 'axios'

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

export async function getServerSideProps(context){
    const id = parseInt(context.query.id.toString())

    const selectedGrantee = await defaultPrisma.openedGrantee.findFirst({
        where: {
          AND: [
            {
              id: id
            },
            {
              // active: true
            }
          ]
        },
    })

    return {
        props: {
            selectedGrantee: selectedGrantee
        }
    }
}

export default function editGrantee(props) {
    const [name, setName] = useState(props.selectedGrantee.name)
    const [adress, setAdress] = useState(props.selectedGrantee.adress)
    const [adressNumber, setAdressNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [cellPhone, setCellPhone] = useState(mask(unMask(props.selectedGrantee.phone), ['(99) 9-9999-9999']))
    const [details, setDetails] = useState(props.selectedGrantee.details)
    const [peopleOnHouse, setPeopleOnHouse] = useState('');
    const [mainNeeds, setMainNeeds] = useState('');

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleAdressChange = e => {
        setAdress(e.target.value)
    }
    const handleAdressNumberChange = e => {
        setAdressNumber(e.target.value)
    }
    const handleComplementChange = e => {
        setComplement(e.target.value)
    }
    const handleDistrictChange = e => {
        setDistrict(e.target.value)
    }
    const handleCityChange = e => {
        setCity(e.target.value)
    }
    const handleStateChange = e => {
        setState(e.target.value)
    }
    const handleZipCodeChange = event => {
        setZipCode(mask(unMask(event.target.value), ['99.999-999']))
    }
    const handlePhoneChange = event => {
        setPhone(mask(unMask(event.target.value), ['(99) 9999-9999']))
    }
    const handleCellPhoneChange = event => {
        setCellPhone(mask(unMask(event.target.value), ['(99) 9-9999-9999']))
    }
    const handleDetailsChange = event => {
        setDetails(event.target.value)
    }
    const handlePeopleOnHouseChange = (event) => {
    setPeopleOnHouse(event.target.value);
    }
    const handleMainNeedsChange = event => {
        setMainNeeds(event.target.value)
    }

    const createGrantee = async () => {
      const id = parseInt(props.selectedGrantee.id)
      const granteeToCreate = {
        name,
        adress,
        adressNumber,
        complement,
        district,
        city,
        state,
        zipCode: unMask(zipCode),
        phone: unMask(phone),
        cellPhone: unMask(cellPhone),
        details,
        peopleOnHouse,
        mainNeeds
      }

      const response = await axios.post(`/api/grantee/${id}/createGrantee`, granteeToCreate)

      if(response)
        console.log(response);
    }
    
  
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
                    <TextField label="Nome Completo" fullWidth value={name} onChange={handleNameChange}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Endereço" fullWidth value={adress} onChange={handleAdressChange}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <TextField label="Número" fullWidth value={adressNumber} onChange={handleAdressNumberChange}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField label="Complemento" fullWidth value={complement} onChange={handleComplementChange}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Bairro" fullWidth value={district} onChange={handleDistrictChange}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Cidade" fullWidth value={city} onChange={handleCityChange}/>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="Estado" fullWidth value={state} onChange={handleStateChange}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField label="CEP" fullWidth value={zipCode} onChange={handleZipCodeChange}/>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField label="Telefone" fullWidth value={phone} onChange={handlePhoneChange}/>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TextField label="Telefone Celular" fullWidth value={cellPhone} onChange={handleCellPhoneChange}/>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Número de pessoas na residência
                      </InputLabel>
                      <Select
                      
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={peopleOnHouse}
                        onChange={handlePeopleOnHouseChange}
                        autoWidth
                        label="Age"
                      >
                        
                        {/* <MenuItem value=""></MenuItem> */}
                        <MenuItem value={1}>1 (um)</MenuItem>
                        <MenuItem value={2}>2 (dois)</MenuItem>
                        <MenuItem value={3}>3 (três)</MenuItem>
                        <MenuItem value={4}>4 (quatro)</MenuItem>
                        <MenuItem value={5}>5 (cinco ou mais)</MenuItem>
                        
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                        // value={peopleNumber}
                        // onChange={handleChange}
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
                  </Grid> */}

                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Solicitação do Donatário"
                      value={details}
                      onChange={handleDetailsChange}
                    />
                  </Grid>
                  <Grid item md={12} xs={12} sm={12} xl={12}>
                    <TextField
                      type="text"
                      fullWidth
                      multiline
                      rows={4}
                      label="Principais necessidades"
                      // value={mainNeeds}
                      onChange={handleMainNeedsChange}
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
                            onClick={()=>{
                              Router.push("/grantee/openedGrantees")
                            }}
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
                            onClick={createGrantee}
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
