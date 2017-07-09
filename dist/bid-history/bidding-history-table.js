'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _table = require('../table/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEADERS = ['Id', 'Date-Time', 'Item-Name', 'Bid', 'Winning-Bid'];

var BiddingHistoryTable = function () {
    function BiddingHistoryTable(store) {
        _classCallCheck(this, BiddingHistoryTable);

        this.store = store;
        this.table = null;
    }

    _createClass(BiddingHistoryTable, [{
        key: 'init',
        value: function init() {
            var _this = this;

            return this.store.getData().then(function (data) {
                return _this.table = new _table2.default(HEADERS, data, 'bidding-history-table');
            });
        }
    }]);

    return BiddingHistoryTable;
}();

exports.default = BiddingHistoryTable;