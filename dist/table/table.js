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