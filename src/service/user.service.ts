import UserModel from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  //   getAll = (): Promise<UserModel[]> => {};
  //   getById = (id: number): Promise<UserModel> => {};
  //   deleteById = (id: number): Promise<any> => {};
  //   create = (nom: string, prenom: string): Promise<UserModel> => {};
  //   update = (): Promise<UserModel> => {};
  //   patch = (): Promise<UserModel> => {};
}
