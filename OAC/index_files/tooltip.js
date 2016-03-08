var isIE = /msie|MSIE/.test(navigator.userAgent);

Tooltips = function(container) {
	this.init(container);
};

jQuery.extend(Tooltips.prototype,
{
	container : null,
	init : function(container) {
		var thisContext = this;
		this.container = container;
		if (this.container == null) {
			this.container = jQuery(document);
		}
		this.container.find('a.open').live('click', function(){ 
			var toolTipTrigger = jQuery(this);
			var toolTip = toolTipTrigger.next('div.popup');
			
			thisContext.container.find('a.open').parent().css({zIndex: 0});
			toolTipTrigger.parent().css({zIndex: 100});
			
			if(toolTip.length)
			{
				if(toolTip.is(':hidden')){
					// close opened
					thisContext.hideAllToolTips();
	
					if(toolTip.hasClass('polleft')){
						ttOffsetX = toolTipTrigger.width()-jQuery(this).width()-340; // left
					} else {
						ttOffsetX = toolTipTrigger.width()+20; // right
					}
					ttOffsetY = (toolTip.height()/2)-10;
					// show
					thisContext.showToolTip(toolTip, ttOffsetX, ttOffsetY);
					// hide
					toolTip.find('a.close').click(function(){
						thisContext.hideToolTip(toolTip);
					});
				}				
			}
		});

		// Showing tooltip
		this.container.find('button.open, input.open').bind('mouseenter', function(){ 
			
			var toolTipTrigger = jQuery(this);
			if(!toolTipTrigger.hasClass('ui-state-disabled')){ 
				return false;
			}
			
			var toolTip = toolTipTrigger.next('div.popup');
			if(toolTip.length){
				if(toolTip.hasClass('polleft')){
					ttOffsetX = toolTipTrigger.width()-jQuery(this).width()-340; // left
				} else {
				   ttOffsetX = toolTipTrigger.width()+20; // right
				}
				ttOffsetY = (toolTip.height()/2)-10;
				if(toolTip.hasClass('top15')){
					ttOffsetY-=15;
				}
				// show
				thisContext.showToolTip(toolTip, ttOffsetX, ttOffsetY);
			}
		});
		
		// Hiding tooltip
		this.container.find('button.open, input.open, div.featureIcons a.open').bind('mouseleave mouseout', function()
		{
			var toolTipTrigger = jQuery(this);
			if(!toolTipTrigger.hasClass('ui-state-disabled'))
			{ 
				return false;
			}
			
			var toolTip = toolTipTrigger.next('div.popup');
			if(toolTip.length)
			{
				thisContext.hideToolTip(toolTip);
			}
		});
	},
	showToolTip : function(ttObj, x, y){
		if(isIE){
			ttObj.css({left: x+'px', top: -y+'px'}).show();
		} else {
			ttObj.css({opacity: 1, left: x+'px', top: -y+'px'}).fadeIn(200);
		}
	},
	hideToolTip : function(ttObj){
		if(isIE){
			ttObj.hide();
		} else {
			ttObj.fadeOut(200);
		}
	},
	hideAllToolTips : function(){
		if(isIE){
			jQuery('div.popup:visible').hide();
		} else {
			jQuery('div.popup:visible').fadeOut(200);
		}
	}
});