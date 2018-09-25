import { Entity, EntitySystem } from 'complex-engine';
export default class ScriptSystem extends EntitySystem {
    constructor();
    /**
     * Called every tick. Calls the update method of the attached script object
     */
    update(entity: Entity): void;
}
