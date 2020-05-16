import { observable, action } from 'mobx';
import Common from 'client/stores/common';
import User from 'client/stores/user';
import API from 'helpers/client/api';

class Profile {
    @observable profile = null;
    @observable profiles = [];
    @observable loading = false;
    @observable messages = [];

    @action.bound
    getProfile() {
        this.setLoading(true);
        this.profile = null;
        return API.getProfile(Common.token)
            .then(response => {
                this.setLoading(false);
                User.setUsername(response.data.user.name);
                this.setProfile(response.data);
            })
            .catch(err => {
                this.setLoading(false);
                this.setMessages(err.response.data.errors);
            });
    }

    @action.bound
    submitProfile(data) {
        this.messages = [];
        return API.submitProfile(data, Common.token)
            .then(response => response)
            .catch(err => {
                this.setMessages(err.response.data.errors);
            });
    }

    @action.bound
    submitExperience(data) {
        this.messages = [];
        return API.submitExperience(data, Common.token)
            .then(response => response)
            .catch(err => {
                this.setMessages(err.response.data.errors);
            });
    }

    @action.bound
    submitEducation(data) {
        this.messages = [];
        return API.submitEducation(data, Common.token)
            .then(response => response)
            .catch(err => {
                this.setMessages(err.response.data.errors);
            });
    }

    @action.bound
    deleteExperience(expId) {
        this.messages = [];
        return API.deleteExperience(expId, Common.token)
            .then(response => response)
            .catch(err => err);
    }

    @action.bound
    deleteEducation(eduId) {
        this.messages = [];
        return API.deleteEducation(eduId, Common.token)
            .then(response => response)
            .catch(err => err);
    }

    @action.bound
    setLoading(loading) {
        this.loading = loading;
    }

    @action.bound
    setMessages(messages) {
        this.messages = messages;
    }

    @action.bound
    setProfile(profile) {
        this.profile = profile;
    }
}

export default new Profile();
