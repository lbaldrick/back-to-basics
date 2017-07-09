'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _table = require('../table/table');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEADERS = ['Id', 'Date-Time', 'Item-Name', 'Bid', 'Winning-Bid'];

var Table = function () {
    function Table(store) {
        _classCallCheck(this, Table);

        this.store = store;
        this.table = null;
    }

    _createClass(Table, [{
        key: 'init',
        value: function init() {
            var _this = this;

            return this.store.getData().then(function (data) {
                _this.table = new _table.Table(HEADERS, data, 'bid-history-table');
            });
        }
    }]);

    return Table;
}();

exports.default = Table;