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
        return this.api.post('/api/register', data).then(function(response) {
            return response;
        });
    }

    login(data) {
        return this.api.post('/api/login', data).then(function(response) {
            return response;
        });
    }

    getProfile(token) {
        return this.api
            .get('/api/profile/me', {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(function(response) {
                return response;
            });
    }
}

export default new Api();
