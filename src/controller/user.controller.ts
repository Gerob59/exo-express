import { Request, Response } from "express";
import UserModel from "../model/user.model";
import UserService from "../service/user.service";

export default class TodoController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const data: UserModel[] = await this.service.getAll();
    res.send(data);
  };

  //   public getById = async (req: Request, res: Response): Promise<void> => {};
  //   public deleteById = async (req: Request, res: Response): Promise<void> => {};
  //   public create = async (req: Request, res: Response): Promise<void> => {};
  //   public update = async (req: Request, res: Response): Promise<void> => {};
  //   public patch = async (req: Request, res: Response): Promise<void> => {};
}
