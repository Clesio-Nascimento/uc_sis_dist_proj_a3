import express from "express"
import "./infra/providers/kafka/consumers"

const app = express();
app.use(express.json());

const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`))
