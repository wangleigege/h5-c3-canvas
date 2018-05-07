var dataObj=function(){

	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}


dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;
	ctx1.save();
	ctx1.shadowBlur=20;
	ctx1.shadowColor="white";
    ctx1.font="30px Verdana";
	ctx1.fillStyle="white";
	ctx1.textAlign="center";

	ctx1.fillText("score:"+this.score,w*0.5,h-15);//分数

	if(this.gameOver){//结束语显示时间
		this.alpha+=deltaTime*0.0002;
		if(this.alpha>1){
			this.alpha=1;
		}

		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		ctx1.fillText("游戏结束0-0",w*0.5,h*0.55);
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function(){//计算分数
	this.score+=this.fruitNum*10*this.double;
	this.fruitNum=0;
	this.double=1;
}