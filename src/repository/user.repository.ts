import axios from "axios";
import "dotenv/config";
import UserModel from "../model/user.model";

export default class UserRepository {
  private URL: string = process.env.JSONSERVER as string;

  getAll = async (): Promise<UserModel[]> => {
    return axios.get(`${this.URL}`).then((res) => res.data);
  };

  getById = async (id: number): Promise<UserModel> => {
    return axios
      .get(`${this.URL}/${id}`)
      .then((res) => res.data)
      .catch(() => "id not found");
  };

  create = async (user: UserModel): Promise<UserModel> => {
    return axios.post(`${this.URL}`, user).then((res) => res.data);
  };

  deleteById = (id: number): Promise<any> => {
    return axios.delete(`${this.URL}/${id}`).then((res) => res.data);
  };

  update = async (user: UserModel): Promise<UserModel> => {
    return axios.put(`${this.URL}/${user.id}`, user).then((res) => res.data);
  };

  patch = async (id: number, user: UserModel): Promise<UserModel> => {
    return axios.patch(`${this.URL}/${id}`, user).then((res) => res.data);
  };
}
