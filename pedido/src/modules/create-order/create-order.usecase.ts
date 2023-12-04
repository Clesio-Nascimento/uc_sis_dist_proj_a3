import { prismaClient } from "../../infra/database/prismaClient"

type CreateOrderRequest = {
    customerId: string
    items: [{ productId: string, quantity: number }]
}

export class CreateOrderUseCase {
    constructo() { }

    // Requisição para API de produtos para verificar se tem estoque do produto
    // axios.get('/product')

    async execute(data: CreateOrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                customerId: data.customerId,                
                status: "AGUARDANDO PAGAMENTO",
                OrderItems: {
                    createMany: {
                        data: data.items
                    },
                },

            },

        })     

        return order
    }
}