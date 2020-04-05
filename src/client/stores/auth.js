import { observable, action, decorate } from 'mobx';
import Common from 'client/stores/common';
import API from 'helpers/client/api';

class Auth {
    @observable inProgress = false;

    @action.bound
    doLogin(data) {
        this.inProgress = true;
        return API.login(data)
            .then(function(response) {
                Common.setToken(response.data.token);
            })
            .catch(function(err) {
                // const errors = err.response.data.errors;
                // if (errors) {
                //     errors.forEach(error => {
                //         console.log(error);
                //     });
                // }
            })
            .finally(() => {
                this.inProgress = false;
            });
    }

    @action.bound
    doRegister(data) {
        this.inProgress = true;
        return API.register(data)
            .then(function(response) {
                Common.setToken(response.data.token);
                // this.isAuthenticated = true;
                
            })
            .catch(function(err) {
                // const errors = err.response.data.errors;
                // if (errors) {
                //     errors.forEach(error => {
                //         console.log(error);
                //     });
                // }
            })
            .finally(() => {
                this.inProgress = false;
            });
    }

    // @action.bound
    // logout() {
    //     Common.setToken(undefined);
    //     // return Promise.resolve();
    // }
}

export default new Auth();