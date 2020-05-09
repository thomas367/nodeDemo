import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    register(data) {
        return this.api.post('/api/register', data).then(response => response);
    }

    login(data) {
        return this.api.post('/api/login', data).then(response => response);
    }

    getProfile(token) {
        return this.api
            .get('/api/profile/me', {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }

    createProfile(data, token) {
        return this.api
            .post('/api/profile', data, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }
}

export default new Api();
