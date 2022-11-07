var keypressed=" ";
// Create the reference variable of the canvas using fabric.Canvas()

var canvas=new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images

block_img_wdth=25;
block_img_hight=25;

// Define the starting x and y coordinates for the player

player_x=25;
player_y=25

// Define a variable named player_object to store object of the player image

var player_object="";

// Add a function named player_update() to add the player image

function player_update(){
    fabric.Image.fromURL("player.png",function (img){
        player_object=img;
        player_object.scaleToWidth(100);
        player_object.scaleToHeightt(155)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })
}                                                                                        

// Add a function named new_image() to add the different images as per the specific keys pressed

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (img){
        block_img_object=img;
        block_img_object.scaleToWidth(100);
        block_img_object.scaleToHeight(155)
        block_img_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_img_object);
    })
}                                                                                        
window.addEventListener("keydown",my_key_down);
function my_key_down(e){
    keypressed=e.keyCode;
    console.log (keypressed);
    if (e.shiftKey==true && keypressed == "80"){
        console.log("p+and+shift");
        block_img_wdth=block_img_wdth+10;
        block_img_hight=block_img_hight+10;
        document.getElementById("current_wdith").innerHTML=block_img_wdth;
        document.getElementById("current_height").innerHTML=block_img_hight;
    }
    if (e.shiftKey==true && keypressed == "77"){
        console.log("m+and+shift");
        block_img_wdth=block_img_wdth-10;
        block_img_hight=block_img_hight-10;
        document.getElementById("current_wdith").innerHTML=block_img_wdth;
        document.getElementById("current_height").innerHTML=block_img_hight;       
}
if (keypressed=="38"){
    Up ();
    console.log ("up");
}
if (keypressed=="40"){
    down ();
    console.log ("down");
}
if (keypressed=="37"){
    left ();
    console.log ("left");
}
if (keypressed=="39"){
    right ();
    console.log ("right");
}
if (keypressed=="87"){
    new_image ("wall.jpg");
    console.log ("w");
}
if (keypressed=="71"){
    new_image ("ground.png");
    console.log ("g");
}
if (keypressed=="76"){
    new_image ("light_green.png");
    console.log ("l");
}
if (keypressed=="84"){
    new_image ("trunk.jpg");
    console.log ("t");
}
if (keypressed=="82"){
    new_image ("roof.jpg");
    console.log ("r");
}
if (keypressed=="89"){
    new_image ("yellow_wall.png");
    console.log ("y");
}
if (keypressed=="68"){
    new_image ("dark_green.png");
    console.log ("d");
}
if (keypressed=="85"){
    new_image ("unique.png");
    console.log ("u");
}
if (keypressed=="67"){
    new_image ("cloud.jpg");
    console.log ("c");
}
}

function up(){
  if(player_y>0){
    player_y=
  }   
}