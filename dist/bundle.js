(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store(dataLoader) {
        _classCallCheck(this, Store);

        this.dataLoader = dataLoader;
        this.data = [];
        this.promise = null;
    }

    _createClass(Store, [{
        key: "loadData",
        value: function loadData() {
            var _this = this;

            this.promise = this.dataLoader.loadData().then(function (data) {
                return _this.data = data;
            });

            return this.promise;
        }
    }, {
        key: "getData",
        value: function getData() {
            if (this.promise) {
                return Promise.resolve(this.data);
            } else {
                return this.loadData();
            }
        }
    }]);

    return Store;
}();

exports.default = Store;
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseStore = require('../base-store');

var _baseStore2 = _interopRequireDefault(_baseStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = function (_BaseStore) {
    _inherits(Store, _BaseStore);

    function Store(dataLoader) {
        _classCallCheck(this, Store);

        return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, dataLoader));
    }

    return Store;
}(_baseStore2.default);

exports.default = Store;
},{"../base-store":1}],3:[function(require,module,exports){
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
},{"../table/table":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var request = function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
};

exports.default = request;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataLoader = function () {
    function DataLoader(url) {
        _classCallCheck(this, DataLoader);

        this.url = url;
    }

    _createClass(DataLoader, [{
        key: 'loadData',
        value: function loadData() {
            return (0, _client2.default)('get', this.url);
        }
    }]);

    return DataLoader;
}();

exports.default = DataLoader;
},{"./client":4}],6:[function(require,module,exports){
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
},{"./bid-history/bidding-history-store":2,"./bid-history/bidding-history-table":3,"./data-loader":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = function () {
    function Table(headers, rows, classNames) {
        _classCallCheck(this, Table);

        this.tableEl = this._createTable(headers, rows, classNames || '');
        this._initialiseEventListeners();
    }

    _createClass(Table, [{
        key: '_initialiseEventListeners',
        value: function _initialiseEventListeners() {
            // this.tableEl.querySelectorAll('tr').forEach((el) => {
            //     el.addEventListener('click', (event) => {
            //
            //     });
            // })
        }
    }, {
        key: '_createTable',
        value: function _createTable(headers, rows, classNames) {
            var _this = this;

            var tableEl = document.createElement('table');
            tableEl.classList.add(classNames);
            tableEl.appendChild(this._createHeader(headers));

            rows.forEach(function (row) {
                tableEl.appendChild(_this._createRow(row, headers));
            });

            return tableEl;
        }
    }, {
        key: '_createHeader',
        value: function _createHeader(headers) {
            var rowEl = document.createElement('tr');
            headers.forEach(function (header) {
                var th = document.createElement('th');
                th.setAttribute('colspan', '1');
                th.innerText = header;
                rowEl.appendChild(th);
            });

            return rowEl;
        }
    }, {
        key: '_createRow',
        value: function _createRow(row, headers) {
            var rowEl = document.createElement('tr');
            headers.forEach(function (header) {
                var td = document.createElement('td');
                td.setAttribute('colspan', '1');
                td.innerText = row[header] || '';

                rowEl.appendChild(td);
            });

            return rowEl;
        }
    }]);

    return Table;
}();

exports.default = Table;
},{}]},{},[6]);
