import { observable, action, decorate } from 'mobx';
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
        return API.getProfile(Common.token).then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            // const error = err.response.data.msg;
            // if (error) {
            //     this.error = error;
            // }
        })
        .finally(() => {
            this.loading = false;
        });
    }
}

export default new Profile();