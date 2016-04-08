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
