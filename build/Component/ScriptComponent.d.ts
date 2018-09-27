import { Component } from "complex-engine";
import Script from "../Model/Script";
export default class ScriptComponent extends Component {
    private script;
    private setup;
    constructor(script: Script);
    getScript(): Script;
    isSetup(): boolean;
    setSetup(setup: boolean): void;
}
