import Table from '../table/table';

const HEADERS = ['Id', 'Date-Time', 'Item-Name', 'Bid', 'Winning-Bid'];

export default class BiddingHistoryTable {
    constructor(store) {
        this.store = store;
        this.table = null;
    }

    init() {
       return this.store.getData()
            .then(data => {
               return this.table = new Table(HEADERS, data, 'bidding-history-table');
            });
    }
}