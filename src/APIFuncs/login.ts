import axios from 'axios';
import * as md5 from 'md5';
import { apiServerUrl } from '../BaseData';

export function Login(email: string, password: string) {
  const hashed = md5(password);
  return axios.post(apiServerUrl + '/api/login', { email: email, password: hashed });
}
