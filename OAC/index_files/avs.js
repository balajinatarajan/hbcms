AddressPickListManager = function(params)
{
	this.init(params);
};

jQuery.extend(AddressPickListManager.prototype,
{
	init: function (params)
	{
		params.dialogDiv.dialog(
		{
	        autoOpen: false,
			bgiframe: true,
			modal: true,
			draggable:true,
			resizable:false,
			width:"600px",
			minHeight:300,
			closeOnEscape: false,
			dialogClass:"avs",
			show:"fade",
			hide:"fade"
		});
	}
});


function validateAvs(validator, errors, result)
{
	if(result != null)
	{
		// need to check if address picklist has been returned
		var serviceAddressError = errors["serviceAddress"];
		var billingAddressError = errors["billingAddress"];
		var serviceAddress      = result.serviceAddress;
		var billingAddress      = result.billingAddress;

		// Creating boolean variables for easier if-else "navigation".
		var hasServiceAddressError = (serviceAddressError != null);
		var hasBillingAddressError = (billingAddressError != null);
		var hasAddressError        = (hasServiceAddressError || hasBillingAddressError);
		var hasServiceSuggestedAvs = (serviceAddress != null && serviceAddress.avsSuggested != null);
		var hasServicePicklist     = (serviceAddress != null && serviceAddress.picklist != null && serviceAddress.picklist.m_Items != null);
		var hasBillingSuggestedAvs = (billingAddress != null && billingAddress.avsSuggested != null);
		var hasBillingPicklist     = (billingAddress != null && billingAddress.picklist != null && billingAddress.picklist.m_Items != null);
		var hasAddressSuggestions  = (hasServiceSuggestedAvs || hasServicePicklist || hasBillingSuggestedAvs || hasBillingPicklist); 
		var isServiceConfirmAddressRequired = (serviceAddress != null && serviceAddress.confirmAddressRequired != null) ? serviceAddress.confirmAddressRequired : null;
		var isBillingConfirmAddressRequired = (billingAddress != null && billingAddress.confirmAddressRequired != null) ? billingAddress.confirmAddressRequired : null;
		var confirmAddressRequired 			= (isServiceConfirmAddressRequired || isBillingConfirmAddressRequired);
		
		// Message for "Go Back" links
		var goBackMessage = "Go back and enter a different address";
		var confirmAddressRequiredBackMessage = "No, go back and change address";
		
		// Insert service div name prior to billing (always display service address error before billing address).
		var divs = new Array();
		var overlayNameForDivs = new Array();
		if(hasAddressError)
		{
			// Service address confirmation.
			if(hasServiceSuggestedAvs)
			{
				var message = getAvsAddressForDisplay(serviceAddress);
				jQuery("#serviceAddressConfirmationMessage").html(message);
				divs.push("#serviceAddressConfirmation");
				
				overlayNameForDivs.push("Overlay: AVS Confirm Your Address");
				tracker.performErrorTracking("confirmaddress");
				
				jQuery(document).trigger("TRACK_ERROR", [null, "confirmaddress",null]);
			}
			else if(hasServicePicklist) // Service address picklist.
			{
				var items    = jQuery("#servicePickListTemplate").tmpl(serviceAddress.picklist.m_Items);
				var theTable = jQuery("#servicePicklistTable");
				theTable.find("tr").remove();
				jQuery.each(items, function(index, row)
				{
					theTable.children("tbody").append(row);
				});
				divs.push("#servicePickList");
				
				overlayNameForDivs.push("Overlay: AVS Verify Your Address");
				tracker.performErrorTracking("verifyaddress");
				
				jQuery(document).trigger("TRACK_ERROR", [null, "verifyaddress",null]);
			}
			else if(isServiceConfirmAddressRequired) {
				
				var message = getConfirmAddressRequiredForDisplay(serviceAddress);
				jQuery("#serviceAddressRequiredConfirmationMessage").html(message);
				divs.push("#serviceAddressRequiredConfirmation");
				
				overlayNameForDivs.push("Overlay: AVS Confirm Your Address");
				tracker.performErrorTracking("usps_validation");
				
				// jQuery(document).trigger("TRACK_ERROR", [null, "usps_validation",null]);
			}
	
			// Billing address confirmation.
			if(hasBillingSuggestedAvs)
			{
				var message = getAvsAddressForDisplay(billingAddress);
				jQuery("#billingAddressConfirmationMessage").html(message);
				divs.push("#billingAddressConfirmation");
				overlayNameForDivs.push("Overlay: AVS Confirm Your Address");
			}
			else if(hasBillingPicklist) // Billing address picklist.
			{
				var items = jQuery("#billingPickListTemplate").tmpl(billingAddress.picklist.m_Items);
				var theTable = jQuery("#billingPicklistTable");
				theTable.find("tr").remove();
				jQuery.each(items, function(index, row)
				{
					theTable.children("tbody").append(row);
				});
				divs.push("#billingPickList");
				overlayNameForDivs.push("Overlay: AVS Verify Your Address");
			}
			else if(isBillingConfirmAddressRequired) {
				
				var message = getConfirmAddressRequiredForDisplay(billingAddress);
				jQuery("#billingAddressRequiredConfirmationMessage").html(message);
				divs.push("#billingAddressRequiredConfirmation");
				
				overlayNameForDivs.push("Overlay: AVS Confirm Your Address");
				tracker.performErrorTracking("usps_validation");
				
				// jQuery(document).trigger("TRACK_ERROR", [null, "usps_validation",null]);
			}
	
			// Displaying error message for service address.
			if(hasServiceAddressError)
			{
				jQuery("#serviceAddressError").html(serviceAddressError);
				outlineAddressFields(true);
			}
	
			// Displaying error message for billing address.
			if(hasBillingAddressError)
			{
				jQuery("#billingAddressError").html(billingAddressError);
				outlineAddressFields(false);
			}
	
			// Dialog with a single address issue.
			if(divs.length == 1)
			{	
				// Address confirmation only
				if(hasServiceSuggestedAvs || hasBillingSuggestedAvs)
				{
					jQuery("#addressDialog").dialog(
					{
						buttons:
						[
							{
								html:"<strong>Continue with this address</strong>",
								click:function() {
									var avsSuggested = (hasServiceSuggestedAvs) ? serviceAddress.avsSuggested : billingAddress.avsSuggested;
									copyAvsAddress(avsSuggested, hasServiceSuggestedAvs);
									var errorDiv = (hasServiceSuggestedAvs) ? "#serviceAddressError" : "#billingAddressError";
									jQuery(errorDiv).html("");
									// hide error msg on page
							   		jQuery(".error-msg").hide();
									removeOutlineAddressFields(hasServiceSuggestedAvs);
									jQuery("#addressDialog").dialog("close");
								}
							}
						]
					});
					
					// Repositioning "Continue" button and inserting "Go Back" link					
					displayContinueAndGoBackLink(goBackMessage, hasServiceAddressError, false);
				}
				// Address pick list only
				else if(hasServicePicklist || hasBillingPicklist) 
				{
					jQuery("#addressDialog").dialog(
					{
						buttons:
						[
							{
								id    : "dialogContinue",
								html  : "<strong>Continue with this address</strong>",
								click : function()
								{
									var monikerId = (hasServicePicklist) ? "serviceMoniker" : "billingMoniker";
									var moniker   = jQuery("input[name='" + monikerId + "']:checked").val();
									
									if(moniker != null && moniker != "")
									{
										jQuery("#dialogErrorMessage").html("");
										var result = getMonikerAddress(moniker);
										copyAvsAddress(result, hasServicePicklist);
										var errorDiv = (hasServicePicklist) ? "#serviceAddressError" : "#billingAddressError";
										jQuery(errorDiv).html("");
										// hide error msg on page
								   		jQuery(".error-msg").hide();
										removeOutlineAddressFields(hasServicePicklist);
										jQuery("#addressDialog").dialog("close");
									}
								}
							}
						]
					});
					// Repositioning "Continue" button and inserting "Go Back" link					
					displayContinueAndGoBackLink(goBackMessage, hasServiceAddressError, false);					
				}
				// Confirm Address Required only (Bypass AVS)
				else if(confirmAddressRequired) {
					jQuery("#addressDialog").dialog(
							{
								buttons:
								[
									{
										id  : "confirmserviceaddressrequiredcontinue",
										html:"<strong>Yes, proceed with this address</strong>",
										click:function() {
											var avsConfirm = (isServiceConfirmAddressRequired) ? serviceAddress.address : billingAddress.address;
											copyAvsAddress(avsConfirm, isServiceConfirmAddressRequired);
											var errorDiv = (isServiceConfirmAddressRequired) ? "#serviceAddressError" : "#billingAddressError";
											var skipServiceAddressValidation = (isServiceConfirmAddressRequired) ? true : false;
											var skipBillingAddressValidation = (isBillingConfirmAddressRequired) ? true : false;
											// Populate hidden form fields
											jQuery("#skipServiceAddressValidation").val(skipServiceAddressValidation);
											jQuery("#skipBillingAddressValidation").val(skipBillingAddressValidation);
											// If user changes address after clicking "Yes" set skipValidation flag to "false"
											if(skipServiceAddressValidation) {
												jQuery("#activation_account_serviceContact_address_address").bind('change', function() {
									  				jQuery("#skipServiceAddressValidation").val("false");
									  		   	});
												jQuery("#activation_account_serviceContact_address_city").bind('change', function() {
									  				jQuery("#skipServiceAddressValidation").val("false");
									  		   	});
												jQuery("#activation_account_serviceContact_address_state").bind('change', function() {
									  				jQuery("#skipServiceAddressValidation").val("false");
									  		   	});
												jQuery("#activation_account_serviceContact_address_postalCode").bind('change', function() {
									  				jQuery("#skipServiceAddressValidation").val("false");
									  		   	});
											}
											if(skipBillingAddressValidation) {
												jQuery("#activation_account_billingContact_address_address").bind('change', function() {
									  				jQuery("#skipBillingAddressValidation").val("false");
									  		   	});
												jQuery("#activation_account_billingContact_address_city").bind('change', function() {
									  				jQuery("#skipBillingAddressValidation").val("false");
									  		   	});
												jQuery("#activation_account_billingContact_address_state").bind('change', function() {
									  				jQuery("#skipBillingAddressValidation").val("false");
									  		   	});
												jQuery("#activation_account_billingContact_address_postalCode").bind('change', function() {
									  				jQuery("#skipBillingAddressValidation").val("false");
									  		   	});
											}
											jQuery(errorDiv).html("");
											// hide error msg on page
									   		jQuery(".error-msg").hide();
											removeOutlineAddressFields(isServiceConfirmAddressRequired);
											jQuery("#addressDialog").dialog("close");
											
											tracker.performLinkTracking(jQuery(this));
										}
									}
								]
							});
					
					// Repositioning "Continue" button and inserting "Go Back" link
					displayContinueAndGoBackLink(confirmAddressRequiredBackMessage, hasServiceAddressError, true);
				}
			}
			else if(divs.length == 2) // Two address issues
			{
				var screenButtons = getFirstScreenButtons(serviceAddress, billingAddress, divs, overlayNameForDivs, isServiceConfirmAddressRequired, 
						isBillingConfirmAddressRequired, confirmAddressRequiredBackMessage, goBackMessage);
				jQuery("#addressDialog").dialog("option", screenButtons);
				
				// Repositioning "Continue" button and inserting "Go Back" link
				if(screenButtons.buttons.length > 1){
					jQuery("html").find("#avsgobackmessage").remove();
				}
				//else {
					if(isServiceConfirmAddressRequired)
						displayContinueAndGoBackLink(confirmAddressRequiredBackMessage, hasServiceAddressError, true);
					else 
						displayContinueAndGoBackLink(goBackMessage, hasServiceAddressError, false);
				//}
			}
	
			// Displaying modal dialog with address(es) suggestion only if there are such related errors.
			// Also displaying confirmedAddressRequired dialog to bypass AVS 
			if(hasAddressSuggestions || confirmAddressRequired)
			{
				// Hiding all <div>s which may have been opened previously or had error messages.
				jQuery("#dialogErrorMessage").html("");
				jQuery("#servicePickList").hide();
				jQuery("#billingPickList").hide();
				jQuery("#serviceAddressConfirmation").hide();
				jQuery("#billingAddressConfirmation").hide();
				jQuery("#serviceAddressRequiredConfirmation").hide();
				jQuery("#billingAddressRequiredConfirmation").hide();
				
				// Disabling "Continue" button with a specific id.
				if(jQuery("#dialogContinue").length > 0)
				{
					jQuery("#dialogContinue").addClass("ui-state-disabled");
				}
				
				jQuery("#addressDialog").dialog("open");
				jQuery(divs[0]).show();
				jQuery(document).trigger('OVERLAY_OPEN', overlayNameForDivs[0]);
				
				jQuery('.ui-dialog-buttonpane').css('padding-right','245px');
			}
		}
	}
	
	// Setting suggested AVS service address.
	if(!hasServiceAddressError && serviceAddress != null && serviceAddress.avsSuggested != null)
	{
		copyAvsAddress(serviceAddress.avsSuggested, true);
	}
	
	// Setting suggested AVS billing address.
	if(!hasBillingAddressError && billingAddress != null && billingAddress.avsSuggested != null)
	{
		copyAvsAddress(billingAddress.avsSuggested, false);
	}
	
	// Removing error message for service address.
	if(!hasServiceAddressError)
	{
		jQuery("#serviceAddressError").html("");
	}
	
	// Removing error message for billing address.
	if(!hasBillingAddressError)
	{
		jQuery("#billingAddressError").html("");
	}
	
	// Removing address errors (they don't have matching fields) and showing other non AVS related errors.
	delete errors.serviceAddress;
	delete errors.billingAddress;
}



// Copies AVS address values to service address fields.
function copyAvsAddress(address, isServiceAddress)
{
	if(isServiceAddress)
	{
		jQuery("#activation_account_serviceContact_address_address").val(address.address);
		jQuery("#activation_account_serviceContact_address_city").val(address.city);
		jQuery("#activation_account_serviceContact_address_state").val(address.state);
		jQuery("#activation_account_serviceContact_address_postalCode").val(address.postalCode);
	}
	else
	{
		jQuery("#activation_account_billingContact_address_address").val(address.address);
		jQuery("#activation_account_billingContact_address_city").val(address.city);
		jQuery("#activation_account_billingContact_address_state").val(address.state);
		jQuery("#activation_account_billingContact_address_postalCode").val(address.postalCode);
	}
}



// Helper method for obtaining address information using a moniker id.
function getMonikerAddress(moniker)
{
	var result;
	
	jQuery.ajax(
	{
		url: "avsaddress_execute.action",
		async: false,
		type: "POST",
		dataType: "json",
		data: ( { "moniker" : moniker } ),
		success: function(data)
		{
			result = data.result;
		},
		error: function(xhr, text, err)
		{
			alert("moniker AJAX error");
		}
	});

	return result;
}



// Helper method for generating the address issues dialog buttons for the first and second screen.
function getFirstScreenButtons(serviceAddress, billingAddress, divs, linoverlayNameForDivssServiceConfirmAddressRequired, 
		isBillingConfirmAddressRequired, confirmAddressRequiredBackMessage, goBackMessage)
{
	var firstScreenButtons;
	var secondScreenButtons;

	// Second screen buttons.
	if(billingAddress.avsSuggested != null)
	{
		secondScreenButtons =
		{
			buttons: [
				{
					html:"<strong>Continue with this address</strong>",
					click:function() {
						copyAvsAddress(billingAddress.avsSuggested, false);
						jQuery("#billingAddressError").html("");
						// hide error msg on page
				   		jQuery(".error-msg").hide();
						jQuery("#addressDialog").dialog("close");
						removeOutlineAddressFields(false);
					}
				}
			]
		}
	}
	else
	{
		if(isBillingConfirmAddressRequired){
			secondScreenButtons =
				{
					buttons: [
								{
									id  : "confirmbillingaddressrequiredcontinue",
									html:"<strong>Yes, proceed with this address</strong>",
									click:function()
									{
										var avsConfirm = billingAddress.address;
										copyAvsAddress(avsConfirm, false);
										var errorDiv = "#billingAddressError";
										var skipBillingAddressValidation = (isBillingConfirmAddressRequired) ? true : false;
										// Populate hidden form field
										jQuery("#skipBillingAddressValidation").val(skipBillingAddressValidation);
										// If user changes address after clicking "Yes" set skipValidation flag to "false"
										if(skipBillingAddressValidation) {
											jQuery("#activation_account_billingContact_address_address").bind('change', function() {
								  				jQuery("#skipBillingAddressValidation").val("false");
								  		   	});
											jQuery("#activation_account_billingContact_address_city").bind('change', function() {
								  				jQuery("#skipBillingAddressValidation").val("false");
								  		   	});
											jQuery("#activation_account_billingContact_address_state").bind('change', function() {
								  				jQuery("#skipBillingAddressValidation").val("false");
								  		   	});
											jQuery("#activation_account_billingContact_address_postalCode").bind('change', function() {
								  				jQuery("#skipBillingAddressValidation").val("false");
								  		   	});
										}
										jQuery(errorDiv).html("");
										// hide error msg on page
								   		jQuery(".error-msg").hide();
										removeOutlineAddressFields(false);
										jQuery("#addressDialog").dialog("close");
										
										tracker.performLinkTracking(jQuery(this));
									}
								}
						]
				}
		}
		else {
			secondScreenButtons =
				 {
					buttons: [
					     {
					    	id   : "dialogContinue",
					        html :"<strong>Continue with this address</strong>",
					        click : function()
					        {
					        	var moniker = jQuery("input[name='billingMoniker']:checked").val();
					        	if(moniker != null)
					        	{
					        		jQuery("#dialogErrorMessage").html("");
					        		var result = getMonikerAddress(moniker);
					        		copyAvsAddress(result, false);
					        		jQuery("#billingAddressError").html("");
					        		// hide error msg on page
					        		jQuery(".error-msg").hide();
					        		removeOutlineAddressFields(false);
					        		jQuery("#addressDialog").dialog("close");
					        		
					        		tracker.performLinkTracking(jQuery(this));
					        	}
					        	else
					        	{
					        		jQuery("#dialogErrorMessage").html("Please make a selection.");
					        	}
					        }
					      }
					 ]
				 }
			}
	}

	// First screen service AVS suggested buttons.
	if(serviceAddress.avsSuggested != null)
	{
		firstScreenButtons =
		{
			buttons: [
				{
					html:"<strong>Continue with this address</strong>",
					click:function() {
						copyAvsAddress(serviceAddress.avsSuggested, true);
						jQuery("#serviceAddressError").html("");
						jQuery(divs[0]).hide();
						jQuery(divs[1]).show();
						jQuery(document).trigger('OVERLAY_OPEN', overlayNameForDivs[1]);
						removeOutlineAddressFields(true);
						jQuery("#addressDialog").dialog("option", secondScreenButtons);
						
						/* Repositioning "Continue" button and inserting "Go Back" link on second 
				   		   screen (if second screen is confirmedAddressRequired dialog */
						if(isBillingConfirmAddressRequired)
							displayContinueAndGoBackLink(confirmAddressRequiredBackMessage, false, true);
						else
							displayContinueAndGoBackLink(goBackMessage, false, false);
					}
				}
			]
		}
	}
	else // First screen service pick list buttons or if(isServiceConfirmAddressRequired) then confirmAddressRequired dialog buttons
	{
		if(isServiceConfirmAddressRequired) {
			firstScreenButtons =
			{
				buttons: [
					{
						id  : "confirmserviceaddressrequiredcontinue",
						html:"<strong>Yes, proceed with this address</strong>",
						click:function()
						{
							var avsConfirm = serviceAddress.address;
							copyAvsAddress(avsConfirm, isServiceConfirmAddressRequired);
							var errorDiv = "#serviceAddressError";
							var skipServiceAddressValidation = (isServiceConfirmAddressRequired) ? true : false;
							// Populate hidden form field
							jQuery("#skipServiceAddressValidation").val(skipServiceAddressValidation);
							// If user changes address after clicking "Yes" set skipValidation flag to "false"
							if(skipServiceAddressValidation) {
								jQuery("#activation_account_serviceContact_address_address").bind('change', function() {
					  				jQuery("#skipServiceAddressValidation").val("false");
					  		   	});
								jQuery("#activation_account_serviceContact_address_city").bind('change', function() {
					  				jQuery("#skipServiceAddressValidation").val("false");
					  		   	});
								jQuery("#activation_account_serviceContact_address_state").bind('change', function() {
					  				jQuery("#skipServiceAddressValidation").val("false");
					  		   	});
								jQuery("#activation_account_serviceContact_address_postalCode").bind('change', function() {
					  				jQuery("#skipServiceAddressValidation").val("false");
					  		   	});
							}
							jQuery(errorDiv).html("");
							// hide error msg on page
					   		jQuery(".error-msg").hide();
					   		
					   		jQuery("html").find("#avsgobackmessage").remove();
					   		
							jQuery(divs[0]).hide();
							jQuery(divs[1]).show();
							jQuery(document).trigger('OVERLAY_OPEN', overlayNameForDivs[1]);
							removeOutlineAddressFields(true);
					   		jQuery("#addressDialog").dialog("option", secondScreenButtons);
					   		
					   		/* Repositioning "Continue" button and inserting "Go Back" link on second 
					   		   screen (if second screen is confirmedAddressRequired dialog */
							if(isBillingConfirmAddressRequired)
								displayContinueAndGoBackLink(confirmAddressRequiredBackMessage, false, true);
							else
								displayContinueAndGoBackLink(goBackMessage, false, false);
							
							tracker.performLinkTracking(jQuery(this));
						}
					}
				]
			}
		} else {
			firstScreenButtons =
		    {
			     buttons: [
				     {
				    	 id    : "dialogContinue",
				    	 html:"<strong>Continue with this address</strong>",
				    	 click:function()
				    	 {
				    		 var moniker = jQuery("input[name='serviceMoniker']:checked").val();
				    		 if(moniker != null)
				    		 {
				    			 jQuery("#dialogErrorMessage").html("");
				    			 var result = getMonikerAddress(moniker);
				    			 copyAvsAddress(result, true);
				    			 jQuery("#serviceAddressError").html("");
				    			 jQuery(divs[0]).hide();
				    			 jQuery(divs[1]).show();
				    			 jQuery(document).trigger('OVERLAY_OPEN', overlayNameForDivs[1]);
							
				    			 jQuery("html").find("#avsgobackmessage").remove();
				    			 
				    			 removeOutlineAddressFields(true);
				    			 jQuery("#addressDialog").dialog("option", secondScreenButtons);
				    			 
				    			 
				    			 /* Repositioning "Continue" button and inserting "Go Back" link on second 
							   		screen (if second screen is confirmedAddressRequired dialog */
								if(isBillingConfirmAddressRequired) 
									displayContinueAndGoBackLink(confirmAddressRequiredBackMessage, false, true);
								else
									displayContinueAndGoBackLink(goBackMessage, false, false);
				    		 }
				    		 else
				    		 {
				    			 jQuery("#dialogErrorMessage").html("Please make a selection.");
				    		 }
				    	 }
				     }
				 ]
		    }
		}
	}
	return firstScreenButtons;
}


// Helper methods for creating AVS address string for display.
function getAvsAddressForDisplay(address)
{
	var message = address.avsSuggested.address + "<br/>" +
	              address.avsSuggested.city    + ", "    +
	              address.avsSuggested.state   + " "     +
	              address.avsSuggested.postalCode; 
	return message;
}

function getConfirmAddressRequiredForDisplay(address) {
	if(address.address.search("\n") != -1)
		address.address = address.address.replace("\n","<br/>");
	var message = address.address + "<br/>" +
				  address.city	   + ", "   +
				  address.state	   + " "    +
				  address.postalCode;
	return message;
}

// Helper method for repositioning "Continue" button and creating "Go Back" links for regular dialog and confirmAddressRequired dialog
function displayContinueAndGoBackLink(goBackMessage, hasServiceAddressError, isConfirmAddressRequiredDialog) {
	//if(isConfirmAddressRequiredDialog)
		jQuery("div.ui-dialog-buttonset").css({'margin-left' : '40px', 'float' : 'left'});
	//else
	//	jQuery("div.ui-dialog-buttonset").css({'margin-left' : '40px', 'float' : 'left'});
	
	var link = jQuery("html").find("#avsgobackmessage");
	jQuery.each(link, function() {
		jQuery(this).remove();
	});
	
	var link = jQuery("html").find("#contact");
	jQuery.each(link, function() {
		jQuery(this).remove();
	});
	
	var contactMsg = "<div style='width:540px; margin-left:20px; padding-bottom:10px;' id='contact'>If you are unable to enter or select your correct address, please call Listener Care at 866-635-2349.</div>";
	
	jQuery("<div id='avsgobackmessage' class='greyGradient'><a href='#' onClick='return false;'>"+goBackMessage+"</a></div>").insertBefore(jQuery("div.ui-dialog-buttonpane"));
	
	if(!isConfirmAddressRequiredDialog)
		jQuery(contactMsg).insertAfter(jQuery("div.ui-dialog-buttonpane"));
	
	//if(isConfirmAddressRequiredDialog)
		jQuery("html").find("#avsgobackmessage").css({'position' : 'absolute', 'margin-left' : '330px', 'margin-top' : '23px'});
	//else
	//	jQuery("html").find("#avsgobackmessage").css({'position' : 'absolute', 'margin-left' : '330px', 'margin-top' : '23px'});
	
	jQuery("html").find("#avsgobackmessage").bind('click', function () {
		jQuery("#addressDialog").dialog("close");
		switch(hasServiceAddressError){
		case true:
			jQuery("#activation_account_serviceContact_address_address").focus().select();
			break;
		case false:
			jQuery("#activation_account_billingContact_address_address").focus().select();	
			break;
		default:
			jQuery("#activation_account_serviceContact_address_address").focus().select();
		}
		
		tracker.performLinkTracking(jQuery(this));
	});
}

function outlineAddressFields(isServiceAddress){
	if(isServiceAddress){
		jQuery("#activation_account_serviceContact_address_address").addClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_city").addClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_state").addClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_postalCode").addClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_address").parents('div.form-item').find('label.required').addClass('error').css({'background-image' : 'url(images/label-required.gif)'});
		jQuery("#validServiceAddress").val(false);
	}
	else {
		jQuery("#activation_account_billingContact_address_address").addClass('form-field-error');
		jQuery("#activation_account_billingContact_address_city").addClass('form-field-error');
		jQuery("#activation_account_billingContact_address_state").addClass('form-field-error');
		jQuery("#activation_account_billingContact_address_postalCode").addClass('form-field-error');
		jQuery("#activation_account_billingContact_address_address").parents('div.form-item').find('label.required').addClass('error').css({'background-image' : 'url(images/label-required.gif)'});
		jQuery("#validBillingAddress").val(false);
	}
}

function removeOutlineAddressFields(isServiceAddress){
	if(isServiceAddress){
		jQuery("#activation_account_serviceContact_address_address").removeClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_city").removeClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_state").removeClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_postalCode").removeClass('form-field-error');
		jQuery("#activation_account_serviceContact_address_address").parents('div.form-item').find('label.required').removeClass('error');
		jQuery("#validServiceAddress").val(true);
	}
	else {
		jQuery("#activation_account_billingContact_address_address").removeClass('form-field-error');
		jQuery("#activation_account_billingContact_address_city").removeClass('form-field-error');
		jQuery("#activation_account_billingContact_address_state").removeClass('form-field-error');
		jQuery("#activation_account_billingContact_address_postalCode").removeClass('form-field-error');
		jQuery("#activation_account_billingContact_address_address").parents('div.form-item').find('label.required').removeClass('error');
		jQuery("#validBillingAddress").val(true);
	}
}