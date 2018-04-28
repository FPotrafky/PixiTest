console.log("Start");

//Create a Pixi Application
let app = new PIXI.Application({ 
    backgroundColor: 0x061639,
    width: 600,         // default: 800
    height: 300,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

app.renderer.backgroundColor = 0xFFF;

PIXI.loader
  .add("images/money.png")
  .load(setup);

function setup() {
  let sprite = new PIXI.Sprite(
    PIXI.loader.resources["images/money.png"].texture
  );
  //Add the cat to the stage
  app.stage.addChild(sprite);
}
