'use strict';

var _biddingHistoryTable = require('./bid-history/bidding-history-table');

var _biddingHistoryTable2 = _interopRequireDefault(_biddingHistoryTable);

var _biddingHistoryStore = require('./bid-history/bidding-history-store');

var _biddingHistoryStore2 = _interopRequireDefault(_biddingHistoryStore);

var _dataLoader = require('./data-loader');

var _dataLoader2 = _interopRequireDefault(_dataLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = function main() {

    var biddingTable = new _biddingHistoryTable2.default(new _biddingHistoryStore2.default(new _dataLoader2.default('json/BidHistory.json')));

    document.addEventListener("DOMContentLoaded", function (event) {
        biddingTable.init().then(function (table) {
            document.querySelector('.table-container').appendChild(table.tableEl);
        });
    });
};

main();