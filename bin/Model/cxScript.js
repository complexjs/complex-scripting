'use strict';

/**
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cxScript = function () {
  function cxScript() {
    _classCallCheck(this, cxScript);

    /**
     * @type {cxEntity}
     */
    this.entity = null;

    /**
     * @type {cxWorld}
     */
    this.world = null;

    /**
     * @type {String}
     */
    this.tag = "cx.script";

    /**
     * [isSetUp description]
     * @type {Boolean}
     */
    this.isSetUp = false;
  }

  /**
   * called by the Scriptsystem when script is ready
   * @param  {cxEntity} entity The entity
   * @param  {cxWorld} world  The world instance
   */


  _createClass(cxScript, [{
    key: '_setup',
    value: function _setup(entity, world) {
      this.entity = entity;
      this.world = world;

      this.onSetup();
      this.isSetUp = true;
    }

    /**
     * Method the user can implement. called when script is ready
     */

  }, {
    key: 'onSetup',
    value: function onSetup() {
      throw 'Method not implemented';
    }

    /**
     * Method can be implemented by user to update it's logic
     */

  }, {
    key: 'update',
    value: function update() {
      throw 'Method not implemented';
    }
  }]);

  return cxScript;
}();

exports.default = cxScript;