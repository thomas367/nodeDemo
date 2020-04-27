import { observable, action, reaction } from 'mobx';

class Common {
    @observable token = window.localStorage.getItem('jwt');

    constructor() {
        reaction(
            () => this.token,
            (token) => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        );
    }

    @action.bound
    setToken(token) {
        this.token = token;
    }
}

export default new Common();
