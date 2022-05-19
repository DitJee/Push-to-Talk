import axios from 'axios';
import { UserInfo, UserLocalStorage } from '../interfaces';
import APIHelper from './API-helper';
import authHeader from './auth-header';

const API_PREFIX: string = APIHelper.GetAPIPrefix();
const USER_URL: string = '/api/test';

class UserService {
  private USER_URL: string = API_PREFIX + '/api/user';
  public getPublicContent() {
    return axios.get(USER_URL + '/all');
  }
  public getUserBoard() {
    return axios.get(USER_URL + '/user', { headers: authHeader() });
  }
  public getModeratorBoard() {
    return axios.get(USER_URL + '/mod', { headers: authHeader() });
  }
  public getAdminBoard() {
    return axios.get(USER_URL + '/admin', { headers: authHeader() });
  }
}
export default new UserService();
