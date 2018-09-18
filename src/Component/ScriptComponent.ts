import {Component} from 'complex-engine';
import Script from '../Model/Script';

export default class ScriptComponent extends Component {
    script: Script;
    setup: boolean;

    constructor(script: Script) {
        super();

        this.script = script;
        this.setup = false;
    }

    getScript(): Script {
        return this.script;
    }
}
