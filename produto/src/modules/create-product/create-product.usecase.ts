import { prismaClient } from "../../infra/database/prismaClient";
import { KafkaSendMessage } from "../../infra/providers/kafka/producer";

type CreateProductRequest = {
    name: string,
    code: string,
    quantity: number,
    price: number
}

// ...

export class CreateProductUseCase {
    constructor() { }
  
    async execute(data: CreateProductRequest) {
      try {
        const productCreated = await prismaClient.product.create({
          data: {
            ...data,
          },
        });
  
        const kafkaMessage = new KafkaSendMessage();
        await kafkaMessage.execute('PRODUCT_CREATED', {
          id: productCreated.id,
          code: productCreated.code,
        });
  
        return productCreated;
      } catch (error) {
        console.error("Error creating product:", error);
        throw error;
      }
    }
 }
  

