export default class Table {

    constructor(headers, rows, classNames) {
        this.tableEl = this._createTable(headers, rows, classNames || '');
        this._initialiseEventListeners();
    }

    _initialiseEventListeners() {
        // this.tableEl.querySelectorAll('tr').forEach((el) => {
        //     el.addEventListener('click', (event) => {
        //
        //     });
        // })
    }

    _createTable(headers, rows, classNames) {
        const tableEl =  document.createElement('table');
        tableEl.classList.add(classNames);
        tableEl.appendChild(this._createHeader(headers));

        rows.forEach(row => {
            tableEl.appendChild(this._createRow(row, headers));
        });

        return tableEl;
    }

    _createHeader(headers) {
        const rowEl = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.setAttribute('colspan', '1');
            th.innerText = header;
            rowEl.appendChild(th);
        });

        return rowEl;
    }

    _createRow(row, headers) {
        const rowEl = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.setAttribute('colspan', '1');
            td.innerText = row[header] || '';

            rowEl.appendChild(td);
        });

        return rowEl;
    }
}