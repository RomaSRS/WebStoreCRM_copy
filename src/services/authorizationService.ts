
import { IUserAuthData } from 'src/typings/userTypes';
import { Path } from 'src/utils/path';

import {api, setToken} from './api'

export default class AuthorizationService {
    login = async (userdata: IUserAuthData): Promise<void> => {
        const response = await api.post(Path.LOGIN, JSON.stringify(userdata))

        if (response.statusText !== 'OK') {
            if (response.status === 401) {
                this.logout();
            }

            const error = response.statusText;
            return Promise.reject(error);
        }

        setToken(response.data.token)
        return response.data
    }
    logout() {
        localStorage.removeItem('token');
    }

}
