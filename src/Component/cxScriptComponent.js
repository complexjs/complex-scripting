'use strict';

import {cxComponent} from 'complex-engine';

/**
 *
 */
export default class cxScriptComponent extends cxComponent
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
