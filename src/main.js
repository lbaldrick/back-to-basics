import BiddingHistoryTable from './bid-history/bidding-history-table';
import BiddingHistoryStore from './bid-history/bidding-history-store';
import DataLoader from './data-loader';

const main = () => {

    const biddingTable = new BiddingHistoryTable(
        new BiddingHistoryStore(new DataLoader('json/BidHistory.json'))
    );

    document.addEventListener("DOMContentLoaded", function (event) {
        biddingTable.init()
            .then((table) => {
                document.querySelector('.table-container')
                    .appendChild(table.tableEl);
            });
    });
}

main();
