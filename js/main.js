var can1;
var can2;
var ctx1;

var ctx2;
var lastTime;
var deltaTime;
var bgPic=new Image();
var canwidth;
var canheight;
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var babyEye=[];
var babyBody=[];
var momTail=[];
var momEye=[];
var  momBodyOra=[];
var  momBodyBlue=[];
var wave;
var halo;

var data;
document.body.onload=game;

function game(){
	init();
	
	lastTime=Date.now();
	deltaTime=0;
     gameloop();
}

function init(){
	can1=document.getElementById("can1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("can2");
	ctx2=can2.getContext("2d");

	can1.addEventListener("mousemove", onMouseMove,false);
	bgPic.src="./src/background.jpg";
	canwidth=can1.width;
	canheight=can1.height;
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    mom=new momObj();
    mom.init();
    baby=new babyObj();
    baby.init();
    mx=canwidth*0.5;
    my=canheight*0.5;

    for(var i=0;i<2;i++){//小于眨眼睛
    	babyEye[i]=new Image();
    	babyEye[i].src="./src/babyEye"+i+".png";
    }

    for(var i=0;i<20;i++){//小于身体变颜色
    	babyBody[i]=new Image();
    	babyBody[i].src="./src/babyFade"+i+".png";

    }

    for(var i=0;i<8;i++){

    	momTail[i]=new Image();
    	momTail[i].src="./src/bigTail"+i+".png";
    }

    for(var i=0;i<2;i++){
    	momEye[i]=new Image();
    	momEye[i].src="./src/bigEye"+i+".png";
    }
    data=new dataObj();

    for(var i=0;i<8;i++){
    	momBodyOra[i]=new Image();
    	momBodyBlue[i]=new Image();
    	momBodyOra[i].src="./src/bigSwim"+i+".png";
    	momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";

    }
    wave=new waveObj();
    wave.init();

    halo=new haloObj();
    halo.init();
}


function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;//通用的时间间隔
	lastTime=now;
	if(deltaTime>36) deltaTime=36;
    
	ane.draw();

	fruit.draw();
   
	drawBackground();
	fruitMonitor();
	ctx1.clearRect(0, 0, canwidth, canheight);
	mom.draw();
	baby.draw();
	momeat();
	momeatbaby();
	data.draw();
	wave.draw();
	halo.draw();
    
}
function onMouseMove(e){//大于跟随鼠标
	if(!data.gameOver){

		if(e.offSetX||e.layerX){
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;
		
	}
	}
	
}