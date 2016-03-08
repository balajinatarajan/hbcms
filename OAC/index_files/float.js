
function setFloatLayers(){
	 var name = "#floatlayer";
     var menuYloc = null;
     menuYloc = parseInt(jQuery(name).css("marginTop").substring(0,jQuery(name).css("marginTop").indexOf("px")));
    
     jQuery(window).scroll(function () {
    	 var faqHeight = jQuery('#faqDiv').height()+jQuery('#top-your-radio').height();
       	 //get the maximum position for float chat button
    	 var max = jQuery('#package').height() - faqHeight-200;
    	 //get the  offset by adding scroll to the initial location
    	 var offset = menuYloc+jQuery(document).scrollTop();
    	 //if offset is greater or equal to maximum position , use maximum position
    	 if (offset >= max) {
    	 				 offset = max;
    	  } 
    	 //if offset is less than faq height that means float button has no place initially, so don't move it
    	 
    	 if(offset>faqHeight){
    	 	 offset = offset-faqHeight;
    	 	 offset = offset + "px";
    	 	 jQuery(name).animate({top:offset},{duration:500,queue:false});
    	 }
     });  
}