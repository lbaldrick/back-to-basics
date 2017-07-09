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