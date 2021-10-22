import { prisma } from '.prisma/client'
import defaultPrisma from '../../../../prismaConfig'

const createDonor = async(req, res) => {
    const { body, method} = req
    const { name, cpf, email, password } = body

    if(method !== 'POST'){
        return res.status(200).send({
            success: false,
            message: "Esta requisição aceita somente o verbo POST"
        })
    }else {
        try {
            if(!name)
                throw new Error("O campo name não pode estar vazio.")
            if(!cpf)
                throw new Error("O campo cpf não pode estar vazio.")
            if(!email)
                throw new Error("O campo email não pode estar vazio.")
            if(!password)
                throw new Error("O campo password não pode estar vazio.")

            const verifyEmail = await defaultPrisma.donor.findMany({
                where: {
                        OR: [
                            {
                                cpf: {
                                    equals: cpf
                                }
                            },
                            {
                                email: {
                                    equals: email
                                }
                            }
                        ]
                }
            })
            if(verifyEmail.length > 0){
                return res.status(200).send({
                    sucess: false,
                    message: "Já existe uma conta registrada neste email ou cpf"
                })
            }else {
                const donorToCreate = {
                    name,
                    cpf,
                    email,
                    password,
                    userTypeId: 2
                }
                const donorCreated = await defaultPrisma.donor.create({
                    data: donorToCreate,
                    select: {
                        id: true,
                        name: true,
                        cpf: true,
                        email: true
                    }
                })
                if(!donorCreated){
                    throw new Error("Erro ao ciar doador")
                }else {
                    return res.status(200).send({
                        sucess: true,
                        message: "Doador criado com sucesso.",
                        data: donorCreated
                    })
                }
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

export default createDonor