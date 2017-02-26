# complex-scripting
Module to enabled scripted behaviour to entities in the complex-engine

## install
npm install complex-scripting

## Doc

Check out the [api](http://complexjs.github.io/complex-scripting/index.html)
 or the [wiki](https://github.com/complexjs/complex-scripting/wiki)
 
## Setup

First we have to load the cxScriptSystem by adding it to the cxWorld instance
in the desired Scene.

In our scene:

    import {cxScriptSystem} from 'complex-scripting';

    ...
    load(){
        this.world.addSystem( new cxScriptSystem() );
    }
    ...
    
Now we can create our custom Script. This is done by creating a new file.
For now we use `src/Scripts/MyCustomScript.js` and we add this:

    import {cxScript} from 'complex-scripting';

    export default class MyCustomScript extends cxScript{
        onSetup(){
            // here we can setup all required data like access another component
            //once the scriptcomponent is added to the entity
            
            this.otherComponent = this.entity.getComponents('my.other.component')[0];
        }
        
        update(){
            // here we execute modifications like rotate an object by accessing the corresponding component
            
            this.otherComponent.object.rotation.x += 0.01;
        }
    }
   
   
Now that we have our custom script we have to add the script to the entity.
This is done by creating a new cxScriptComponent and add out custom script to it.

In out scene:


    import {cxEntity} from 'complex-engine';
    import {cxScriptComponent} from 'complex-scripting';
    import MyScript from './src/Scripts/MyCustomScript.js'
    
    ...
    
    load() {
        let entity = new cxEntity();
        entity.addComponent( new cxScriptComponent( new MyScript() ) );
        this.world.addEntity( entity );
    }
     
     ...