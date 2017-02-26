'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _complexEngine = require('complex-engine');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var cxScriptComponent = function (_cxComponent) {
  _inherits(cxScriptComponent, _cxComponent);

  /**
   * @param  {cxScript} script [description]
   */
  function cxScriptComponent(script) {
    _classCallCheck(this, cxScriptComponent);

    /**
     * @type {cxScript}
     */
    var _this = _possibleConstructorReturn(this, (cxScriptComponent.__proto__ || Object.getPrototypeOf(cxScriptComponent)).call(this));

    _this.script = script;

    /**
     * @type {Boolean}
     */
    _this.setup = false;

    /**
     * @type {String}
     */
    _this.tag = 'cx.script.component';

    return _this;
  }

  return cxScriptComponent;
}(_complexEngine.cxComponent);

exports.default = cxScriptComponent;