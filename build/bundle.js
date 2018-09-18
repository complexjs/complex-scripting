var CxScripting = (function () {
  var main = null;
  var modules = {
      "require": {
          factory: undefined,
          dependencies: [],
          exports: function (args, callback) { return require(args, callback); },
          resolved: true
      }
  };
  function define(id, dependencies, factory) {
      return main = modules[id] = {
          dependencies: dependencies,
          factory: factory,
          exports: {},
          resolved: false
      };
  }
  function resolve(definition) {
      if (definition.resolved === true)
          return;
      definition.resolved = true;
      var dependencies = definition.dependencies.map(function (id) {
          return (id === "exports")
              ? definition.exports
              : (function () {
                  if(modules[id] !== undefined) {
                    resolve(modules[id]);
                    return modules[id].exports;
                  } else if(id === "complex-engine") {
                    return window["cx"];
                  } else {
                    try {
                      return require(id);
                    } catch(e) {
                      throw Error("module '" + id + "' not found.");
                    }
                  }
              })();
      });
      definition.factory.apply(null, dependencies);
  }
  function collect() {
      Object.keys(modules).map(function (key) { return modules[key]; }).forEach(resolve);
      return (main !== null) 
        ? main.exports
        : undefined
  }

  var __extends = (this && this.__extends) || (function () {
      var extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  define("Model/Script", ["require", "exports"], function (require, exports) {
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
  });
  define("Component/ScriptComponent", ["require", "exports", "complex-engine"], function (require, exports, complex_engine_1) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ScriptComponent = /** @class */ (function (_super) {
          __extends(ScriptComponent, _super);
          function ScriptComponent(script) {
              var _this = _super.call(this) || this;
              _this.script = script;
              _this.setup = false;
              return _this;
          }
          ScriptComponent.prototype.getScript = function () {
              return this.script;
          };
          return ScriptComponent;
      }(complex_engine_1.Component));
      exports.default = ScriptComponent;
  });
  define("System/ScriptSystem", ["require", "exports", "complex-engine", "Component/ScriptComponent"], function (require, exports, complex_engine_2, ScriptComponent_1) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
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
      }(complex_engine_2.EntitySystem));
      exports.default = ScriptSystem;
  });
  define("index", ["require", "exports", "Component/ScriptComponent", "System/ScriptSystem", "Model/Script"], function (require, exports, ScriptComponent_2, ScriptSystem_js_1, Script_js_1) {
      'use strict';
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ScriptComponent = ScriptComponent_2.default;
      exports.ScriptSystem = ScriptSystem_js_1.default;
      exports.Script = Script_js_1.default;
  });
  //# sourceMappingURL=bundle.js.map
  return collect(); 
})();