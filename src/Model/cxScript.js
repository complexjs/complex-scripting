'use strict';

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

module.exports = cxScript;
