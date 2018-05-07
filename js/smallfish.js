var babyObj=function(){
	this.x;
	this.y;
	this.angle;

	
	this.babyTail=new Image();

	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;

	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}
babyObj.prototype.init=function(){
	this.x=canwidth*0.5-50;
	this.y=canheight*0.5+50;
	this.angle=0;
	
	
	this.babyTail.src="./src/babyTail0.png";
}

babyObj.prototype.draw=function(){

	this.x=lerpDistance(mom.x,this.x,0.98);//跟随大于
	this.y=lerpDistance(mom.y,this.y,0.98);

	var deltaY=mom.y-this.y;//旋转方向
	var deltaX=mom.x-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);

	this.babyEyeTimer+=deltaTime;//眼睛眨动
	if(this.babyEyeTimer>this.babyEyeInterval){

		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;

		if(this.babyEyeCount==0){
			this.babyEyeInterval=Math.random()*1500+2000;//眼睛随机眨动
		}else{
			this.babyEyeInterval=200;
			
		}		
	}
      

    this.babyBodyTimer+=deltaTime;//身体变颜色
      if(this.babyBodyTimer>300){
          this.babyBodyTimer%=300;
      	this.babyBodyCount=this.babyBodyCount+1;
      	if(this.babyBodyCount>19){
      		this.babyBodyCount=19;
      		data.gameOver=true;
      	}
      }
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5+26,-this.babyTail.height*0.5);
    var babyBodyCount=this.babyBodyCount;
    ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
    var babyEyeCount=this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
    
    
	ctx1.restore();
}   