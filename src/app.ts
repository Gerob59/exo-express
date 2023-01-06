import express from "express";
import "dotenv/config";
import UserRouter from "./router/user.router";

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/users", UserRouter);

app.listen(port, () => {
  console.log(`server lancé sur le port ${port}`);
});
