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

    submitProfile(data, token) {
        return this.api
            .post('/api/profile', data, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }

    submitExperience(data, token) {
        return this.api
            .put('/api/profile/experience', data, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }

    submitEducation(data, token) {
        return this.api
            .put('/api/profile/education', data, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }

    deleteExperience(expId, token) {
        return this.api
            .delete(`/api/profile/experience/${expId}`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }

    deleteEducation(eduId, token) {
        return this.api
            .delete(`/api/profile/education/${eduId}`, {
                headers: {
                    'x-auth-token': token
                }
            })
            .then(response => response);
    }
}

export default new Api();
