'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _complexEngine = require('complex-engine');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var cxScriptSystem = function (_cxEntitySystem) {
    _inherits(cxScriptSystem, _cxEntitySystem);

    function cxScriptSystem() {
        _classCallCheck(this, cxScriptSystem);

        var _this = _possibleConstructorReturn(this, (cxScriptSystem.__proto__ || Object.getPrototypeOf(cxScriptSystem)).call(this));

        _this.components = ['cx.script.component'];
        _this.tag = 'cx.script.system';
        return _this;
    }

    /**
     * @param  {cxEntity} entity
     * @param  {cxComponent[]} components
     */


    _createClass(cxScriptSystem, [{
        key: 'update',
        value: function update(entity, components) {
            var scriptComponents = components['cx.script.component'];
            for (var i = 0; i < scriptComponents.length; i++) {
                var scriptComponent = scriptComponents[i];
                var script = scriptComponent.script;

                if (scriptComponent.setup == false) {
                    script._setup(entity, this.world);
                    scriptComponent.setup = true;
                }

                script.update();
            }
        }
    }]);

    return cxScriptSystem;
}(_complexEngine.cxEntitySystem);

exports.default = cxScriptSystem;