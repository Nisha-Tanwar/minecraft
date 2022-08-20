var canvas=new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
block_width=30;
block_height=30;
var playerimage="";
blockimage="";
function playerupdate()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerimage=Img;
        playerimage.scaleToWidth(150);
    playerimage.scaleToHeight(140) ;
playerimage.set({top:playery,left:playerx})  ;
canvas.add(playerimage);
 });
}
function blockupdate(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        blockimage=Img;
        blockimage.scaleToWidth(block_width);
    blockimage.scaleToHeight(block_height) ;
blockimage.set({top:playery,left:playerx})  ;
canvas.add(blockimage);
 });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true&&keypress=='80')
    {
        console.log("shift and P are pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;

    }

    if(e.shiftKey==true&&keypress=='77')
    {
        console.log("shift and M are pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;

    }

    if(keypress=='37')
    {
        left();
        console.log("left");
    }

    if(keypress=='38')
    {
        up();
        console.log("up");
    }

    if(keypress=='39')
    {
        right();
        console.log("right");
    }

    if(keypress=='40')
    {
        down();
        console.log("down");
    }

    if(keypress=='87')
    {
        blockupdate('wall.jpg');
        console.log("w");
    }

    if(keypress=='71')
    {
        blockupdate('ground.png');
        console.log("g");
    }


    if(keypress=='76')
    {
        blockupdate('light_green.png');
        console.log("l");
    }

    if(keypress=='84')
    {
        blockupdate('trunk.jpg');
        console.log("t");
    }

    if(keypress=='82')
    {
        blockupdate('roof.jpg');
        console.log("r");
    }

    if(keypress=='89')
    {
        blockupdate('yellow_wall.png');
        console.log("y");
    }

    if(keypress=='85')
    {
        blockupdate('unique.png');
        console.log("u");
    }

    if(keypress=='67')
    {
        blockupdate('cloud.jpg');
        console.log("c");
    }

    if(keypress=='68')
    {
        blockupdate('dark_green.png');
        console.log("d");
    }

}

function up()
{
    if(playery>0)
    {
        playery=playery-block_height;
        console.log("block height ="+block_height);
        console.log("when up arrow is pressed,x  ="+playerx, "y="+playery);
        canvas.remove(playerimage);
        playerupdate();
    
    }
}

function down()
{
    if(playery<500)
    {
        playery=playery+block_height;
        console.log("block height ="+block_height);
        console.log("when down arrow is pressed,x  ="+playerx, "y="+playery);
        canvas.remove(playerimage);
        playerupdate();
    
    }
}

function left()
{
    if(playerx>0)
    {
        playerx=playerx-block_width;
        console.log("block width ="+block_width);
        console.log("when left arrow is pressed,x  ="+playerx, "y="+playery);
        canvas.remove(playerimage);
        playerupdate();
    
    }
}

function right()
{
    if(playerx<850)
    {
        playerx=playerx+block_width;
        console.log("block width ="+block_width);
        console.log("when right arrow is pressed,x  ="+playerx, "y="+playery);
        canvas.remove(playerimage);
        playerupdate();
    
    }
}

