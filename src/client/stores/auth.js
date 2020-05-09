import { observable, action } from 'mobx';
import Common from 'client/stores/common';
import API from 'helpers/client/api';

class Auth {
    @observable inProgress = false;
    @observable messages = [];

    @action.bound
    doLogin(data) {
        this.setinProgress(true);
        this.messages = [];
        return API.login(data)
            .then(response => {
                Common.setToken(response.data.token);
            })
            .catch(err => {
                this.setinProgress(false);
                this.setMessages(err.response.data.errors);
            });
    }

    @action.bound
    doRegister(data) {
        this.setinProgress(true);
        this.messages = [];
        return API.register(data)
            .then(response => {
                Common.setToken(response.data.token);
            })
            .catch(err => {
                this.setinProgress(false);
                this.setMessages(err.response.data.errors);
            });
    }

    @action.bound
    logout() {
        Common.setToken(undefined);
    }

    @action.bound
    setMessages(messages) {
        this.messages = messages;
    }

    @action.bound
    setinProgress(progress) {
        this.inProgress = progress;
    }
}

export default new Auth();
