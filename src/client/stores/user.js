import { observable, action, reaction } from 'mobx';

class User {
    @observable username = window.localStorage.getItem('user');

    constructor() {
        reaction(
            () => this.username,
            username => {
                if (username) {
                    window.localStorage.setItem('user', username);
                } else {
                    window.localStorage.removeItem('user');
                }
            }
        );
    }

    @action.bound
    setUsername(username) {
        this.username = username;
    }
}

export default new User();
