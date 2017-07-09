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