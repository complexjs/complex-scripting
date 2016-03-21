'use strict';

/**
 *
 */
class cxScriptSystem extends cxEntitySystem
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
        var scriptComponent = components['cx.script.component'];
        var script = scriptComponent.script;

        if(scriptComponent.setup == false)
        {
            script._setup(entity, this.world);
            scriptComponent.setup = true;
        }

        script.update();
    }
}

module.exports = cxScriptSystem;
