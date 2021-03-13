canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
CAR1_height = 100;
CAR1_width = 200;
CAR2_height = 100;
CAR2_width = 200;
background_image = "racing.jpg";
CAR1_image = "CAR IMG 1.PNG";
CAR2_image = "CAR IMG 2.PNG";
CAR1_x = 10;
CAR1_y = 30;
CAR2_x = 10;
CAR2_y = 150;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    CAR1_imgTag = new Image();
    CAR1_imgTag.onload = uploadCAR1;
    CAR1_imgTag.src = CAR1_image;

    CAR2_imgTag = new Image();
    CAR2_imgTag.onload = uploadCAR2;
    CAR2_imgTag.src = CAR2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}
function uploadCAR1(){
    ctx.drawImage(CAR1_imgTag , CAR1_x , CAR1_y , CAR1_width , CAR1_height);
}
function uploadCAR2(){
    ctx.drawImage(CAR2_imgTag , CAR2_x , CAR2_y , CAR2_width , CAR2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}