import axios from "axios";
import "dotenv/config";
import UserModel from "../model/user.model";

export default class UserRepository {
  private URL: string = process.env.JSONSERVER as string;

  //   getAll = async (): Promise<UserModel[]> => {};
  //   getById = async (id: number): Promise<UserModel> => {};
  //   create = async (todo: UserModel): Promise<UserModel> => {};
  //   update = async (todo: UserModel): Promise<UserModel> => {};
  //   deleteById = (id: number): Promise<any> => {};
  //   patch = async (id: number, todo: UserModel): Promise<UserModel> => {};
}
