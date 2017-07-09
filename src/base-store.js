export default class Store {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
        this.data = [];
        this.promise = null;
    }

    loadData() {
        this.promise = this.dataLoader.loadData()
            .then((data) => this.data = data);

        return this.promise;
    }

    getData() {
        if (this.promise) {
            return Promise.resolve(this.data);
        } else {
            return this.loadData();
        }
    }
}