/*
 * Applies to Radiobuttons 
 */
RadioButtons = function(container) {
	this.init(container);
	
};

jQuery.extend(RadioButtons.prototype,
{
		container: null,
		init: function (container) {
			
			if (container == null) {
				container = jQuery('.custom-radio');
			}
			/* Radio Button */
			container.find("input.styled:radio").each(function(){
				if (!jQuery(this).hasClass("styled-complete")) {
					var radioName = jQuery(this).attr('name');
					var radioClass = jQuery(this).attr('class');
					jQuery(this).bind('change', function(){
							tmpCtrl = jQuery(this);	
							container.find('a.radio[rel*=\''+radioName+'\']').removeClass('checked');
							tmpCtrl.next('a.radio').addClass('checked');
						}).hide().after('<a href="#" class="radio" rel="'+radioName+'" onclick="return false"></a>')
					.next('a.radio').bind('click', function(){
						ctrl = jQuery(this);
						container.find('a.radio[rel*=\''+ctrl.attr('rel')+'\']').removeClass('checked');

						ctrl.addClass('checked');
						ctrl.prev('input.styled:radio').attr('checked', 'checked').click();
					}).css({display: 'inline-block'});
					jQuery(this).addClass('styled-complete');
				}
			});
			container.find("input.styled:radio:checked").next('a.radio').addClass('checked');
			
		}
});

/*
 * Applies to  Checkboxes
 */
CheckBoxes = function(container) {
	this.init(container);
	
};

jQuery.extend(CheckBoxes.prototype,
{
		container: null,
		init: function (container) {
			
			if (container == null) {
				container = jQuery('.custom-radio');
			}
			
			/* Check box */
			container.find("input.styled:checkbox").each(function(){
				if (!jQuery(this).hasClass("styled-complete")) {
					var checkboxName = jQuery(this).attr('name');
					var trackingId = jQuery(this).attr('title');
					
					jQuery(this).bind('change', function(){
						//change event is not getting fired except only in case of IE , rest of the code works without change event
						/*	tmpCtrl = jQuery(this);	
							
							if(tmpCtrl.next('a.checkbox').is('.checked')){
								tmpCtrl.next('a.checkbox').removeClass('checked');
							}
							else{
								tmpCtrl.next('a.checkbox').addClass('checked');
							}*/
						}).hide().after('<a href="#" class="checkbox" rel="'+checkboxName+'" onclick="return false"></a>')

					.next('a.checkbox').bind('click', function(){
						ctrl = jQuery(this);
						
						if(ctrl.is('.checked')){
							ctrl.removeClass('checked');
							ctrl.prev('input.styled:checkbox').attr('checked', '').triggerHandler("click");
						}
						else{
							ctrl.addClass('checked');
							tracker.performTracking(tracker.buildFullTrackingId(null, null, null, null, trackingId, null));
							ctrl.prev('input.styled:checkbox').attr('checked', 'checked').triggerHandler("click");
						}						
					}).css({display: 'inline-block'});
					jQuery(this).addClass('styled-complete');
				}
			});
			container.find("input.styled:checkbox:checked").next('a.checkbox').addClass('checked');
			container.find("input.styled:checkbox:not(:checked)").next('a.checkbox').removeClass('checked');
		}
});