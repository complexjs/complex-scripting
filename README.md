# complex-scripting
Module to enabled scripted behaviour to entities in the complex-engine. This can be very useful 
to avoid writing a lot of components and systems if you want to do only small tasks. One of those
tasks could be advance the rotation of an object.

## install
`npm install complex-scripting --save`

## Doc

Check out the [api](http://complexjs.github.io/complex-scripting/index.html) 

## Example
Checkout the [Example](./example/app.js)

## Setup

First we have to load the cxScriptSystem by adding it to the cxWorld instance
in the desired Scene.

In our scene:

```js
    import {ScriptSystem} from 'complex-scripting';

    ...
    load() {
        this.world.addSystem( new ScriptSystem() );
    }
    ...
```
    
Now we can create our custom Script. This is done by creating a new file.
For now we use `src/Scripts/MyCustomScript.js` and we add this:

```js
    import {Script} from 'complex-scripting';

    export default class MyCustomScript extends Script{
        onSetup(){
            // here we can setup all required data like access another component
            //once the scriptcomponent is added to the entity
            
            this.otherComponent = this.entity.getComponents(MyOtherComponent)[0];
        }
        
        update(){
            // here we execute modifications like rotate an object by accessing the corresponding component
            this.otherComponent.object.rotation.x += 0.01;
        }
    }
```
   
   
Now that we have our custom script we have to add the script to the entity.
This is done by creating a new `ScriptComponent` and add out custom script to it.

In our scene:


```js
    import {Entity} from 'complex-engine';
    import {ScriptComponent} from 'complex-scripting';
    import MyScript from './src/Scripts/MyCustomScript.js';
    
    ...
    
    load() {
        let entity = new Entity();
        entity.addComponent( new ScriptComponent( new MyScript() ) );
        this.world.addEntity( entity );
    }
     
     ...
```
