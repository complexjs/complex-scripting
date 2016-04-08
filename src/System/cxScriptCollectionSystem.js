class cxScriptCollectionSystem extends cxEntitySystem
{
    constructor ()
    {
        super();
        this.components = ['cx.script.component.collection'];
        this.tag = 'cx.script.system.collection';
    }

    /**
     * @param  {cxEntity} entity
     * @param  {cxComponent[]} components
     */
    update (entity, components)
    {
        var scriptComponent = components['cx.script.component.collection'];
        var scripts = scriptComponent.scripts;
        let len = scripts.length;

        if(scriptComponent.setup == false)
        {
            for(let i = 0; i < len; i++)
            {
                let script = scripts[i];
                script._setup(entity, this.world);
            }
            scriptComponent.setup = true;
        }

        for(let i = 0; i < len; i++) {
            let script = scripts[i];
            script.update();
        }
    }
}
