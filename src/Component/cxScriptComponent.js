'use strict';

var cxComponent = require('complex-engine-component');

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

module.exports = cxScriptComponent;
