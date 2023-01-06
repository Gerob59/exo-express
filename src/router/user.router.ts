import Express from "express";
import UserRepository from "../repository/user.repository";
import UserService from "../service/user.service";
import UserController from "../controller/user.controller";
import UserModel from "../model/user.model";

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

const user: UserModel = new UserModel("robin", "hotton");
console.log(user.date_inscription);

const router = Express.Router();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.delete("/:id", controller.deleteById);
router.put("/:id", controller.update);
// router.patch("/:id", controller.patch);

export default router;
