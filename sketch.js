var canvas;
var music;
var surface1,surfac2,surface3,surface4;
var box;
var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,500,200,10);
    surface1.shapeColor = "red";

    surface2=createSprite(300,500,200,10);
    surface2.shapeColor = "green";

    surface3=createSprite(500,500,200,10);
    surface3.shapeColor = "blue";

    surface4=createSprite(700,500,200,10);
    surface4.shapeColor = "yellow";

    box=createSprite(random(20,500),150,25,25);
    box.shapeColor = "white";
    box.velocityY = 4;
    box.velocityX = 4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red"
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "green"
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "blue"
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "yellow";
        music.stop();
    }

    edge = createEdgeSprites();

    box.bounceOff(edge);


 drawSprites();
    //add condition to check if box touching surface and make it box
}
