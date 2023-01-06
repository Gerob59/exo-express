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

  create = (user: UserModel): Promise<UserModel> => {
    const item: UserModel = new UserModel(
      user.nom,
      user.prenom,
      user.date_de_naissance,
      user.nationalite
    );
    return this.repository.create(item);
  };

  deleteById = (id: number): Promise<any> => {
    return this.repository.deleteById(id);
  };

  update = async (id: number, user: UserModel): Promise<UserModel> => {
    if (user.id !== id) throw "object corrompted";
    let item = await this.getById(id);
    if (!item) {
      return this.create(user);
    } else {
      return this.update(id, user).catch((err) => err);
    }
  };

  patch = async (id: number, user: UserModel): Promise<UserModel> => {
    const item: UserModel = await this.getById(id);
    item.nom = user.nom;
    item.prenom = user.prenom;
    item.date_de_naissance = user.date_de_naissance;
    item.nationalite = user.nationalite;
    return this.repository.patch(id, item).catch((err) => err);
  };
}
