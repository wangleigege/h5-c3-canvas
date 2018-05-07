var fruitObj=function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=20;//默认果实数量
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.fruitType[i]="";
		this.spd[i]=Math.random() * 0.01+0.005;
		
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function(){
   for(var i=0;i<this.num;i++){
   	if(this.alive[i]){

        if(this.fruitType[i]=="blue"){//果实颜色
        	var pic=this.blue;
        }else{
        	var pic=this.orange;
        }
        
   	if(this.l[i]<=16){//果实大小
   		this.l[i]+=this.spd[i]*deltaTime;
   	}else{
   		this.y[i]-=this.spd[i]*7*deltaTime;
   	}
   	    
   		ctx2.drawImage(pic, this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
         if(this.y[i]<10){
         	this.alive[i]=false;
         }
   	}
   }
}
fruitObj.prototype.born=function(i){
   var aneID=Math.floor(Math.random()*ane.num);
   this.x[i]=ane.headx[aneID];
   this.y[i]=ane.heady[aneID];
   this.l[i]=0;
   this.alive[i]=true;
   var ran=Math.random();
   if(ran<0.25){
   	this.fruitType[i]="blue";
   }else{
   		this.fruitType[i]="orange";
   }
   
}

fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitMonitor(){//限制屏幕果实数量
	var num=0;
	for(var i=0;i<fruit.num;i++){
       {
       	if(fruit.alive[i]) num++;
       }

		if(num<15){
			sendFruit();
			return ;
		}
	}
}

function sendFruit(){//果实出生
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return ;
		}
	}
}