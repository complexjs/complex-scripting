import { Component } from "complex-engine";
import Script from "../Model/Script";

export default class ScriptComponent extends Component {
  private script: Script;
  private setup: boolean;

  constructor(script: Script) {
    super();

    this.script = script;
    this.setup = false;
  }

  public getScript(): Script {
    return this.script;
  }

  public isSetup(): boolean {
    return this.setup;
  }

  public setSetup(setup: boolean): void {
    this.setup = setup;
  }
}
