"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var complex_engine_1 = require("complex-engine");
var ScriptComponent_1 = require("../Component/ScriptComponent");
var ScriptSystem = /** @class */ (function (_super) {
    __extends(ScriptSystem, _super);
    function ScriptSystem() {
        var _this = _super.call(this) || this;
        _this.components = [ScriptComponent_1.default];
        return _this;
    }
    /**
     * Called every tick. Calls the update method of the attached script object
     */
    ScriptSystem.prototype.update = function (entity) {
        if (!this.world) {
            return;
        }
        var scriptComponents = entity.getComponents(ScriptComponent_1.default);
        for (var i = 0; i < scriptComponents.length; i++) {
            var scriptComponent = scriptComponents[i];
            var script = scriptComponent.getScript();
            if (scriptComponent.setup == false) {
                script._setup(entity, this.world);
                scriptComponent.setup = true;
            }
            script.update();
        }
    };
    return ScriptSystem;
}(complex_engine_1.EntitySystem));
exports.default = ScriptSystem;
//# sourceMappingURL=ScriptSystem.js.map