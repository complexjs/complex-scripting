import { Entity, EntitySystem } from 'complex-engine';
import ScriptComponent from './ScriptComponent';

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

            if (scriptComponent.isSetup() === false) {
                script.setup(entity, this.world);
                scriptComponent.setSetup(true);
            }

            script.update();
        }
    }
}
export default ScriptSystem;
