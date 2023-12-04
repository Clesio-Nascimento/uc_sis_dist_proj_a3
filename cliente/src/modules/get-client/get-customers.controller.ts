// get-customers.controller.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GetAllCustomersController {
  async handle(req: Request, res: Response) {
    try {
      const allCustomers = await prisma.client.findMany(); // Obtém todos os clientes do banco de dados

      return res.status(200).json(allCustomers);
    } catch (error) {
      console.error('Error fetching customers:', error);
      return res.status(500).json({ error: 'Error fetching customers' });
    }
  }
}

export { GetAllCustomersController };
