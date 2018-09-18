import {Entity, EntitySystem} from 'complex-engine';
import ScriptComponent from '../Component/ScriptComponent';

export default class ScriptSystem extends EntitySystem {
    constructor() {
        super();
        this.components = [ScriptComponent];
    }

    /**
     * Called every tick. Calls the update method of the attached script object
     */
    public update(entity: Entity) {
        if(!this.world){
            return;
        }

        let scriptComponents = entity.getComponents<ScriptComponent>(ScriptComponent);
        for (let i = 0; i < scriptComponents.length; i++) {
            let scriptComponent = scriptComponents[i];
            let script = scriptComponent.getScript();

            if (scriptComponent.setup == false) {
                script._setup(entity, this.world);
                scriptComponent.setup = true;
            }

            script.update();
        }
    }
}
