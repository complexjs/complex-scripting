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
 * Version 0.5.2
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
