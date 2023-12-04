import { Router } from "express";
import { CreateProductController } from "../modules/create-product/create-product.controller"; 
import cors from "cors";
import { prismaClient } from "./database/prismaClient";

const router = Router();

router.use(cors({
    origin: 'http://localhost:3000', // URL do seu aplicativo React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Se você estiver usando autenticação ou cookies
  }));


router.post("/products", (request, response) => {
    new CreateProductController().handle(request, response)
})

router.get("/products", async (req, res) => {
  try {
    const products = await prismaClient.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os produtos." });
  }
});


export {router}