import { Entity, World } from 'complex-engine';
export default abstract class Script {
    entity: Entity | null;
    world: World | null;
    constructor();
    /**
     * called by the Scriptsystem when script is ready
     */
    setup(entity: Entity, world: World): void;
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
