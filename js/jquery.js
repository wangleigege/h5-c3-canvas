$(function(){

    var  rulebut=$('.rulebut'),
    	 rule=$('.rule');

    	 rulebut.on('click',function(){
    	 	rule.fadeIn();
    	 	
    	 })
         
         $('body').dblclick(function(){
         	rule.fadeOut();
         })

})