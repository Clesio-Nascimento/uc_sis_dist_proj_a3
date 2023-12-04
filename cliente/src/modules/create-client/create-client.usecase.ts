import { prismaClient } from "../../infra/database/prismaClient"
import { KafkaSendMessage } from "../../infra/provider/kafka/producer"

type CreateClientRequest = {
    name: string,
    password: string,
    email: string,
    phone: string

}

export class CreateClientUseCase{
    constructor() {}

    async execute(data: CreateClientRequest){
        //verificar se o cliente existe
        const customer = await prismaClient.client.findFirst({
            where: {
                email: data.email,
            },
        })
        
        if(customer) throw new Error("Customer already exists!")

        //, se não existit cria o cliente
        const customerCreated = await prismaClient.client.create({
            data: {
                ...data,
            }
        })

        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute("CUSTOMER_CREATED", {
            id: customerCreated.id,
            email: customerCreated.email
        })
 
        return customerCreated
    }
}