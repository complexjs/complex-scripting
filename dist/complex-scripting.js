/**
 *
 */
class cxScript
{
    constructor ()
    {
        /**
         * @type {cxEntity}
         */
        this.entity = null;

        /**
         * @type {cxWorld}
         */
        this.world = null;

        /**
         * @type {String}
         */
        this.tag = "cx.script";

        /**
         * [isSetUp description]
         * @type {Boolean}
         */
        this.isSetUp = false;
    }

    /**
     * called by the Scriptsystem when script is ready
     * @param  {cxEntity} entity [description]
     * @param  {cxWorld} world  [description]
     */
    _setup (entity, world)
    {
        this.entity = entity;
        this.world = world;

        this.onSetup();
        this.isSetUp = true;
    }

    /**
     * Method the user can implement. called when script is ready
     */
    onSetup ()
    {

    }

    /**
     * Method can be implemented by user to update it's logic
     */
    update ()
    {

    }
}

/**
 *
 */
class cxScriptCollectionComponent extends cxComponent
{
    /**
     * @param  {cxScript} script [description]
     */
    constructor ( scripts )
    {
        super()

        /**
         * @type {cxScript}
         */
        this.scripts = scripts;

        /**
         * @type {Boolean}
         */
        this.setup = false;

        /**
         * @type {String}
         */
        this.tag = 'cx.script.component.collection';

    }
}

/**
 *
 */
class cxScriptComponent extends cxComponent
{
    /**
     * @param  {cxScript} script [description]
     */
    constructor ( script )
    {
        super()

        /**
         * @type {cxScript}
         */
        this.script = script;

        /**
         * @type {Boolean}
         */
        this.setup = false;

        /**
         * @type {String}
         */
        this.tag = 'cx.script.component';

    }
}

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
