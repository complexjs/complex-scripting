class MyScript extends CxScripting.Script{
    onSetup(){

    }

    update(){
    }
}
// This is our main entry point. In a scene we build the world. We attach all required systems to it. Add all managers
// and entities.
class MyScene extends cx.Scene {
    constructor() {
        super("MainScene");
        this.canvas = document.getElementById('canvas');
    }
    // This method is called internally as soon as you call `Complex.loadScene`
    load() {
        this.world.addSystem(new CxScripting.ScriptSystem());
        this.createPointer();
    }

    createPointer() {
        let pointer = new cx.Entity("Pointer");
        pointer.addComponent(new CxScripting.ScriptComponent(new MyScript()));
        this.world.addEntity(pointer);
    }
}

const complex = cx.Complex.getInstance();

// After the scene has been created we load it
complex.loadScene(new MyScene());

// and start to render it
function render() {
    complex.update();
    requestAnimationFrame(render);
}

requestAnimationFrame(render);
