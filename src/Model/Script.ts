import {Entity, World} from 'complex-engine';

export default abstract class Script {
    entity: Entity | null;
    world: World | null;
    isSetUp: boolean = false;

    constructor() {
        this.entity = null;
        this.world = null;
    }

    /**
     * called by the Scriptsystem when script is ready
     */
    _setup(entity: Entity, world: World): void {
        this.entity = entity;
        this.world = world;

        this.onSetup();
        this.isSetUp = true;
    }

    /**
     * Method the user can implement.
     * Called when script is ready.
     */
    public abstract onSetup(): void;

    /**
     * Method can be implemented by user. Here you can handle all the operations for the entity the component is attached to.
     */
    public abstract update(): void;
}
