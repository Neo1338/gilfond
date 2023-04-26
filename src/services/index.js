import { $host } from '../http/index';

export default class ApiService {
  static async getAllUsers() {
    const { data } = await $host.get('/users');
    return data;
  }
}
