import Express from "express";
import UserRepository from "../repository/user.repository";
import UserService from "../service/user.service";
import UserController from "../controller/user.controller";

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

const router = Express.Router();
// router.get("/", controller.getAll);
// router.get("/:id", controller.getById);
// router.delete("/:id", controller.deleteById);
// router.post("/", controller.create);
// router.put("/:id", controller.update);
// router.patch("/:id", controller.patch);

export default router;
