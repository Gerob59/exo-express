import UserModel from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  getAll = (): Promise<UserModel[]> => {
    return this.repository.getAll();
  };

  getById = (id: number): Promise<UserModel> => {
    return this.repository.getById(id);
  };

  create = (
    nom: string,
    prenom: string,
    date_de_naissance?: string,
    nationalite?: string
  ): Promise<UserModel> => {
    const user: UserModel = new UserModel(
      nom,
      prenom,
      date_de_naissance,
      nationalite
    );
    return this.repository.create(user);
  };

  deleteById = (id: number): Promise<any> => {
    return this.repository.deleteById(id);
  };

  update = (id: number, user: UserModel): Promise<UserModel> => {
    if (user.id !== id) throw "object corrompted";
    const data: UserModel = new UserModel(user.nom, user.prenom);
    if (user === data) {
      return this.repository.create(data);
    } else {
      data.update(user as UserModel);
      return this.repository.update(data).catch((err) => err);
    }
  };

  //   patch = (): Promise<UserModel> => {};
}
