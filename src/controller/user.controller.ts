import { Request, Response } from "express";
import UserModel from "../model/user.model";
import UserService from "../service/user.service";

export default class UserController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response): Promise<void> => {
    const data: UserModel[] = await this.service.getAll();
    res.send(data);
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    const id: number = +req.params.id;
    const data: UserModel = await this.service.getById(id);
    res.send(data);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const nom: string = req.body.nom;
    const prenom: string = req.body.prenom;
    const date_de_naissance: string = req.body.date_de_naissance;
    const nationalite: string = req.body.nationalite;

    const data: UserModel = await this.service.create(
      nom,
      prenom,
      date_de_naissance,
      nationalite
    );
    console.log(data);

    res.send(data);
  };

  public deleteById = async (req: Request, res: Response): Promise<void> => {
    const id: number = +req.params.id;
    this.service
      .deleteById(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.send("you cannot delete that");
      });
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    const id: number = +req.params.id;
    const todo: UserModel = req.body;
    try {
      const data = await this.service.update(id, todo);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  };

  //   public patch = async (req: Request, res: Response): Promise<void> => {};
}
