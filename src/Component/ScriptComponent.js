import { Component } from "complex-engine";
import Script from "../Model/Script";

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

export default ScriptComponent;