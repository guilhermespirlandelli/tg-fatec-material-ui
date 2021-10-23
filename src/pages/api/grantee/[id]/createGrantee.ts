import defaultPrisma from '../../../../../prismaConfig'

const createGrantee = async (req, res) => {
    const {method, body, query} = req
    const {
        name, 
        adress, 
        adressNumber, 
        complement, 
        district, 
        city, 
        state, 
        zipCode, 
        phone, 
        cellPhone, 
        details, 
        peopleOnHouse, 
        mainNeeds} = body
        const id = parseInt(query.id)

        if(method !== 'POST'){
            return res.status(200).send({
                success: false,
                message: "Esta requisição aceita somento o verbo POST."
            })
        }else {
            try {
                if(!name)
                    throw new Error("O campo nome não pode estar vazio.")
                if(!adress)
                    throw new Error("O campo Endereço não pode estar vazio.")
                if(!adressNumber)
                    throw new Error("O campo Número não pode estar vazio.")
                if(!district)
                    throw new Error("O campo Bairro não pode estar vazio.")
                if(!city)
                    throw new Error("O campo Cidade não pode estar vazio.")
                if(!state)
                    throw new Error("O campo Estado não pode estar vazio.")
                if(!zipCode)
                    throw new Error("O campo CEP não pode estar vazio.")
                if(!peopleOnHouse)
                    throw new Error("O campo Quantididade de pessoas na casa não pode estar vazio.")
                if(!mainNeeds)
                    throw new Error("O campo Principais Necessidades não pode estar vazio.")
                
                const updateResponse = await defaultPrisma.openedGrantee.update({
                    data: {
                        active: false
                    },
                    where: {
                        id: id
                    },
                    select: {
                        id: true
                    }
                })
                if(!updateResponse){
                    throw new Error("Erro ao atualizar o Donatário em Aberto.")
                }

                const granteeToCreate = {
                    name, 
                    adress, 
                    adressNumber, 
                    complement, 
                    district, 
                    city, 
                    state, 
                    zipCode, 
                    phone, 
                    cellPhone, 
                    details, 
                    peopleOnHouse, 
                    mainNeeds,
                    userTypeId: 2
                }
                const granteeCreationResponse = await defaultPrisma.grantee.create({
                    data: granteeToCreate,
                    select: {
                        id: true
                    }
                })
                if(!granteeCreationResponse)
                    throw new Error("Erro ao criar Donatário.")
                return res.status(200).send({
                    success: true,
                    message: "Donatário criado com sucesso."
                })
            } catch (error) {
                return res.status(200).send({
                    success: false,
                    message: error.message
                })
            }finally{
                await defaultPrisma.$disconnect()
            }
        }
}

export default createGrantee