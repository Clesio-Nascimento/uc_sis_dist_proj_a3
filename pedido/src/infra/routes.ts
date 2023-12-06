import { Router } from "express";
import { CreateOrderController } from "../modules/create-order/create-order.controller";
import { UpdateOrderController } from "../modules/update-order/update-order.controller";
import cors from "cors";
import { prismaClient } from "./database/prismaClient";

const router = Router();

router.use(cors({
    origin: 'http://localhost:3000', // URL do seu aplicativo React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Se você estiver usando autenticação ou cookies
  }));

router.post("/orders", (request, response) => {
    new CreateOrderController().handle(request, response)
})

router.patch("/orders", (request, response) => {
    new UpdateOrderController().handle(request, response)
})

router.get("/orders", async (req, res) => {
    try {
      const orders = await prismaClient.order.findMany();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar os pedidos." });
    }
  });

export {router}