'use strict';

let cxEntitySystem = require('complex-engine').cxEntitySystem;

/**
 *
 */
module.exports = class cxScriptSystem extends cxEntitySystem
{
    constructor ()
    {
        super();
        this.components = ['cx.script.component'];
        this.tag = 'cx.script.system';
    }

    /**
     * @param  {cxEntity} entity
     * @param  {cxComponent[]} components
     */
    update (entity, components)
    {
        let scriptComponents = components['cx.script.component'];
        for (let i = 0; i < scriptComponents.length; i++) {
            let scriptComponent = scriptComponents[i];
            let script = scriptComponent.script;

            if (scriptComponent.setup == false) {
                script._setup(entity, this.world);
                scriptComponent.setup = true;
            }

            script.update();
        }
    }
}
