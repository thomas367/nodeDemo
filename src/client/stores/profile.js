import { observable, action } from 'mobx';
import Common from 'client/stores/common';
import API from 'helpers/client/api';

class Profile {
    @observable profile = null;
    @observable profiles = [];
    @observable loading = false;
    // @observable error = '';

    @action.bound
    getProfile() {
        this.loading = true;
        return API.getProfile(Common.token)
            .then(response => {
                console.log(response);
                // TODO: store user name
            })
            .catch(err => {
                console.log(err);
                // const error = err.response.data.msg;
                // if (error) {
                //     this.error = error;
                // }
            })
            .finally(() => {
                this.loading = false;
            });
    }

    @action.bound
    submitProfile(data) {
        return API.createProfile(data, Common.token)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err.response);
                // const error = err.response.data.msg;
                // if (error) {
                //     this.error = error;
                // }
            });
    }
}

export default new Profile();
