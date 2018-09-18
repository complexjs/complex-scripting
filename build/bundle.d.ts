declare module "Model/Script" {
    import { Entity, World } from 'complex-engine';
    export abstract class Script {
        entity: Entity | null;
        world: World | null;
        isSetUp: boolean;
        constructor();
        /**
         * called by the Scriptsystem when script is ready
         */
        _setup(entity: Entity, world: World): void;
        /**
         * Method the user can implement.
         * Called when script is ready.
         */
        abstract onSetup(): void;
        /**
         * Method can be implemented by user. Here you can handle all the operations for the entity the component is attached to.
         */
        abstract update(): void;
    }
}
declare module "Component/ScriptComponent" {
    import { Component } from 'complex-engine';
    import Script from "Model/Script";
    export class ScriptComponent extends Component {
        script: Script;
        setup: boolean;
        constructor(script: Script);
        getScript(): Script;
    }
}
declare module "System/ScriptSystem" {
    import { Entity, EntitySystem } from 'complex-engine';
    export class ScriptSystem extends EntitySystem {
        constructor();
        /**
         * Called every tick. Calls the update method of the attached script object
         */
        update(entity: Entity): void;
    }
}
declare module "index" {
    import ScriptComponent from "Component/ScriptComponent";
    import ScriptSystem from "System/ScriptSystem";
    import Script from "Model/Script";
    export { ScriptComponent, ScriptSystem, Script };
}
