import request from './client';

export default class DataLoader {
    constructor(url) {
        this.url = url;
    }

    loadData() {
        return request('get', this.url);
    };
}
