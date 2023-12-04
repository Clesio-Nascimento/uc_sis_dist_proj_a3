import { Router } from "express";
import cors from "cors";
import { CreateCustomerController } from "../modules/create-client/create-client.controller";
import { GetAllCustomersController } from "../modules/get-client/get-customers.controller";

const router = Router();

// Habilitando o CORS para aceitar requisições do seu aplicativo React
router.use(cors({
    origin: 'http://localhost:3000', // URL do seu aplicativo React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Se você estiver usando autenticação ou cookies
  }));

router.post("/customers", (request, response) => {
    new CreateCustomerController().handle(request, response)
});

router.get("/customers", (request, response) => {
    new GetAllCustomersController().handle(request, response)
  });


export { router };
