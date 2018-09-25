"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Script = /** @class */ (function () {
    function Script() {
        this.isSetUp = false;
        this.entity = null;
        this.world = null;
    }
    /**
     * called by the Scriptsystem when script is ready
     */
    Script.prototype._setup = function (entity, world) {
        this.entity = entity;
        this.world = world;
        this.onSetup();
        this.isSetUp = true;
    };
    return Script;
}());
exports.default = Script;
//# sourceMappingURL=Script.js.map