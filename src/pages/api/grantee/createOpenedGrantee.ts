import defaultPrisma from '../../../../prismaConfig'


const createOpenedGrantee = async (req, res) => {
    const { body, method} = req
    const { name, adress, phone, details } = body
    
    
    if(method !== 'POST'){
        return res.status(200).send({
            success: false,
            message: "Esta requisição aceita somente o verbo POST"
        })
    }else {
        try {
            if(!name)
                throw new Error("Campo name não pode estar vazio.")
            if(!adress)
            throw new Error("Campo adress não pode estar vazio.")
            if(!phone)
                throw new Error("Campo phone não pode estar vazio.")
            if(!details)
            throw new Error("Campo details não pode estar vazio.")

            const checkExistingPhone = await defaultPrisma.openedGrantee.findMany({
                where: {
                    phone: {
                        contains: phone
                    },
                    AND: {
                        active: true
                    }
                }

            })
            
            if(checkExistingPhone.length > 0){
                return res.status(200).send({
                    success: false,
                    message: "Telefone já cadastrado"
                })
            }else {
                const granteeToCreate = {
                    name,
                    adress,
                    phone,
                    details,
                    active: true
                }

                await defaultPrisma.openedGrantee.create({
                    data: granteeToCreate
                })
                
                return res.status(200).send({
                    success: true,
                    message: "Donatário criado com sucesso."
                })
            }
        } catch (error) {
            return res.status(200).send({
                success: false,
                message: error.message
            })
        }finally {
            await defaultPrisma.$disconnect()
        }
    }
}

export default createOpenedGrantee