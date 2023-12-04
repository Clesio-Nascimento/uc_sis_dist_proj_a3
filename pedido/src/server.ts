import express from "express"
import "./infra/providers/kafka/consumers"
import { router } from "./infra/routes";

const app = express();
app.use(express.json());

const PORT = process.env.PORT ?? 3002;

app.use(router)

app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`))
