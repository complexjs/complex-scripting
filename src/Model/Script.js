import { Entity, World } from 'complex-engine';

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
    onSetup() {

    }

    /**
     * Method can be implemented by user. Here you can handle all the operations for the entity the component is attached to.
     */
    update() {

    }
}

export default Script;