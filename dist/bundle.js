function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
/**
 * This is a bare Component.
 * It's used to store specific data related to an Entity. This data will then be processed by a cxSystem.
 */


var Component = function Component() {
  _classCallCheck(this, Component);
};
/**
 * Abstract System. A System is responsible that your game works. It holds all the business logic and processes the
 * entities based on the data in the components
 */


var System =
/*#__PURE__*/
function () {
  function System() {
    _classCallCheck(this, System);
    /**  @var {World | null} */


    this.world = null;
  }
  /**
   * get notified when System is added to world
   */


  _createClass(System, [{
    key: "addedToWorld",
    value: function addedToWorld() {}
    /**
     * get notified when entity is added to world
     * @param {Entity} entity
     */

  }, {
    key: "added",
    value: function added(entity) {}
    /**
     * get notified when entity is removed from world
     * @param {Entity} entity
     */

  }, {
    key: "removed",
    value: function removed(entity) {}
    /**
     * 
     * @param {World} world 
     */

  }, {
    key: "setWorld",
    value: function setWorld(world) {
      this.world = world;
    }
  }]);

  return System;
}();
/**
 * This systems renders only entities that match the required components.
 */


var EntitySystem =
/*#__PURE__*/
function (_System) {
  _inherits(EntitySystem, _System);

  function EntitySystem() {
    var _this;

    _classCallCheck(this, EntitySystem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EntitySystem).call(this));
    /** @var {Function[]}  */

    _this.components = [];
    return _this;
  }
  /**
   * 
   * @param {Entity[]} entities
   */


  _createClass(EntitySystem, [{
    key: "processEntities",
    value: function processEntities(entities) {
      for (var i = 0; i < entities.length; i++) {
        this.update(entities[i]);
      }
    }
    /**
     * Get list of components to work with this system
     * @returns {Function[]}
     */

  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.components;
    }
    /**
     * @param {Entity} entity
     */

  }, {
    key: "update",
    value: function update(entity) {}
  }]);

  return EntitySystem;
}(System);

class Script {
  constructor() {
    /** @var {Entity | null} */
    this.entity = null;
    /** @var {World | null} */

    this.world = null;
  }
  /**
   * called by the Scriptsystem when script is ready
   * @param {Entity} entity
   * @param {World} world
   */


  setup(entity, world) {
    this.entity = entity;
    this.world = world;
    this.onSetup();
  }
  /**
   * Method the user can implement.
   * Called when script is ready.
   */


  onSetup() {}
  /**
   * Method can be implemented by user. Here you can handle all the operations for the entity the component is attached to.
   */


  update() {}

}

class ScriptComponent extends Component {
  /**
   * 
   * @param {Script} script 
   */
  constructor(script) {
    super();
    /** @var {Script} */

    this.script = script;
    /** @var {boolean} */

    this.setup = false;
  }
  /**
   * @returns {Script}
   */


  getScript() {
    return this.script;
  }
  /**
   * @returns {boolean}
   */


  isSetup() {
    return this.setup;
  }
  /**
   * @param {boolean} setup 
   */


  setSetup(setup) {
    this.setup = setup;
  }

}

class ScriptSystem extends EntitySystem {
  constructor() {
    super();
    /** @var {Component[]} */

    this.components = [ScriptComponent];
  }
  /**
   * Called every tick. Calls the update method of the attached script object
   * @param {Entity} entity
   */


  update(entity) {
    if (!this.world) {
      return;
    }

    let scriptComponents = entity.getComponents(ScriptComponent);

    for (let i = 0; i < scriptComponents.length; i++) {
      let scriptComponent = scriptComponents[i];
      let script = scriptComponent.getScript();

      if (scriptComponent.isSetup() == false) {
        script.setup(entity, this.world);
        scriptComponent.setSetup(true);
      }

      script.update();
    }
  }

}

export { Script, ScriptComponent, ScriptSystem };
