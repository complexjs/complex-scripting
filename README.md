# complex-scripting
Module to enabled scripted behaviour to entities in the complex-engine

## install
npm install complex-scripting

## usage

-> Add systems to your world
`world.addSystem( new cxScriptSystem() );` or if you want multiple scripts per entity `world.addSystem( cxScriptCollectionSystem() );`

-> create your scripts. Your scripts have to extend `cxScript` Class.
Inside of your script you have to implement an `update` Method and a `onSetup`.
The `onSetup` is called when your script is ready.
At this point you have the entity available which is attached and the world the entity is in.
The `update` method is called every worlds step

->render the world
