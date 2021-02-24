import axios from 'axios';
import * as md5 from 'md5';
import * as fs from 'fs';

export function Login(email: string, password: string) {
    const apiServerUrl = JSON.parse(fs.readFileSync('config.json', 'utf8')).apiServerUrl
    const hashed = md5(password);
    return axios.post(apiServerUrl + '/api/login', { email: email, password: hashed });
}
