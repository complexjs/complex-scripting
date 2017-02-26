'use strict';

/**
 *
 */
export default class cxScript
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
     *
     * @param  {cxEntity} entity The entity
     * @param  {cxWorld} world  The world instance
     */
    _setup (entity, world)
    {
        this.entity = entity;
        this.world = world;

        this.onSetup();
        this.isSetUp = true;
    }

    /**
     * Method the user can implement.
     * Called when script is ready.
     */
    onSetup ()
    {
        throw 'Method not implemented';
    }

    /**
     * Method can be implemented by user. Here you can handle all the operations for the entity the component is attached to.
     */
    update ()
    {
        throw 'Method not implemented';
    }
}
