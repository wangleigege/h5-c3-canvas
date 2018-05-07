var aneObj=function(){
	this.rootx=[];
	this.headx=[];
    this.heady=[]; 
    this.amp=[];
    this.alpha=0;
   
}

aneObj.prototype.num=50;
aneObj.prototype.init=function(){

	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canheight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+50;//真服
	}
	
}
aneObj.prototype.draw=function(){

    	this.alpha+=deltaTime*0.0008;//拍动速度
    	var l=Math.sin(this.alpha);    
        ctx2.save();
        ctx2.globalAlpha=0.5;
	    ctx2.lineWidth=23;
		ctx2.lineCap="round";
		ctx2.strokeStyle="#3b154e";

	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canheight);//摆动幅度 控制点降低
		ctx2.quadraticCurveTo(this.rootx[i],canheight-100,this.headx[i]+l*this.amp[i],this.heady[i]);				
		ctx2.stroke();

	}
     ctx2.stroke();
}