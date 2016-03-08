/*
 * jQuery wizard plug-in 3.0.1
 *
 *
 * Copyright (c) 2010 Jan Sundman (jan.sundman[at]aland.net)
 * 
 * http://www.thecodemine.org
 *
 * Licensed under the MIT licens:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 */


(function($){
	$.widget("ui.formwizard", {

		_init: function() {
			
			var wizard = this;
			var formOptionsSuccess = this.options.formOptions.success;
			var formOptionsComplete = this.options.formOptions.complete;	
			var formOptionsBeforeSend = this.options.formOptions.beforeSend; 
			var formOptionsBeforeSubmit = this.options.formOptions.beforeSubmit; 
			var formOptionsBeforeSerialize = this.options.formOptions.beforeSerialize; 
			this.options.formOptions = $.extend(this.options.formOptions,{
				success	: function(responseText, textStatus, xhr){ 
					if(formOptionsSuccess){
						formOptionsSuccess(responseText, textStatus, xhr);
					}
					if(wizard.options.formOptions && wizard.options.formOptions.resetForm || !wizard.options.formOptions){
						wizard._reset();
					}
				},
				complete : function(xhr, textStatus){
					if(formOptionsComplete){
						formOptionsComplete(xhr, textStatus);
					}
					wizard._enableNavigation();
				},
				beforeSubmit : function(arr, theForm, options) {
					if(formOptionsBeforeSubmit){
						var shouldSubmit = formOptionsBeforeSubmit(arr, theForm, options);
						if(!shouldSubmit)
							wizard._enableNavigation();
						return shouldSubmit;
					}
				},
				beforeSend : function(xhr) {
					if(formOptionsBeforeSend){
						var shouldSubmit = formOptionsBeforeSend(xhr);
						if(!shouldSubmit)
							wizard._enableNavigation();
						return shouldSubmit;
					}
				},
				beforeSerialize: function(form, options) { 
					if(formOptionsBeforeSerialize){
						var shouldSubmit = formOptionsBeforeSerialize(form, options);
						if(!shouldSubmit)
							wizard._enableNavigation();
						return shouldSubmit;
					}				    
				}
			});
			this.element.addClass("ui-helper-reset ui-formwizard ui-widget ui-widget-content ui-helper-reset ui-corner-all");
			this.element.find(":input").addClass("ui-wizard-content ui-helper-reset ui-state-default");	
			this.steps = this.element.find(".step").hide().addClass("ui-formwizard-content ui-helper-reset ui-corner-all");
			this.firstStep = this.steps.first().attr("id");
			this.activatedSteps = new Array();
			this.isLastStep = false;
			this.previousStep = undefined;
			this.currentStep = this.steps.eq(0).attr("id");		
			this.nextButton	= this.element.find(this.options.next)
					.click(function() {
						wizard._next();return false;
					});

			this.nextButtonInitinalValue = this.nextButton.val();
			this.nextButton //REMOVED FOR SIRIUS XM .val(this.options.textNext)
					.addClass("ui-formwizard-button ui-wizard-content ui-helper-reset ui-state-default");

    		this.backButton	= this.element.find(this.options.back)
    				.click(function() {
    					wizard._back();return false; 
    				});

    		this.backButtonInitinalValue = this.backButton.val();
    		this.backButton.val(this.options.textBack)
					.addClass("ui-formwizard-button ui-wizard-content ui-helper-reset ui-state-default");

			if(this.options.validationEnabled && jQuery().validate  == undefined){
				this.options.validationEnabled = false;
				alert("the validation plugin needs to be included");
			}else if(this.options.validationEnabled){
				this.element.validate(this.options.validationOptions);
			}
			if(this.options.formPluginEnabled && jQuery().ajaxSubmit == undefined){
				this.options.formPluginEnabled = false;
				alert("the form plugin needs to be included");
			}
	
			if(this.options.disableInputFields == true){
				$(this.steps).find(":input").attr("disabled","disabled");
			}
			
			if(this.options.historyEnabled){
				var thisContext = this;
				$(window).bind('hashchange', undefined, function(event){
					var hashStep = event.getState( "_" + $(wizard.element).attr( 'id' )) || wizard.firstStep;
					if(hashStep !== wizard.currentStep){
						if(wizard.options.validationEnabled && hashStep === wizard._navigate(wizard.currentStep)){
							if(!wizard.element.valid()){
								wizard._updateHistory(wizard.currentStep);
								wizard.element.validate().focusInvalid();
								
								return false;
							}
						}
						wizard._checkIflastStep(wizard.currentStep);
						if (thisContext.isLastStep) {
							return false;
						}
						if(hashStep !== wizard.currentStep)
							wizard._show(hashStep);
					}
				});
				this._updateHistory(this.firstStep);
			}
			
			this._show(undefined);
			return $(this);
		},
   
		_next : function(){
			if(this.options.validationEnabled){
				if(!this.element.valid()){this.element.validate().focusInvalid();return false;}
			}
			
			if(this.options.remoteAjax != undefined){ 
				var options = this.options.remoteAjax[this.currentStep];
				var wizard = this;
				if(options !== undefined){ 
					var success = options.success;
					var beforeSend = options.beforeSend;
					var complete = options.complete;
					
					options = $.extend({},options,{
						success: function(data, statusText){
							if((success !== undefined && success(data, statusText)) || (success == undefined)){
								wizard._continueToNextStep();	
							}
						},
						beforeSend : function(xhr){
							wizard._disableNavigation();
							if(beforeSend !== undefined)
								beforeSend(xhr);							
							$(wizard.element).trigger('before_remote_ajax', {"currentStep" : wizard.currentStep});
						},
						complete : function(xhr, statusText){
							if(complete !== undefined)
								complete(xhr, statusText);
							$(wizard.element).trigger('after_remote_ajax', {"currentStep" : wizard.currentStep});
							// AS Need to prevent multiple form submission
							//wizard._enableNavigation();
						}
					})
					this.element.ajaxSubmit(options);
					return false;
				}
			}

			this._continueToNextStep();
			
			return false;
		},
	
		_back : function(){
			if(this.activatedSteps.length > 0){
				if(this.options.historyEnabled){
					this._updateHistory(this.activatedSteps[this.activatedSteps.length - 2]);
				}else{
					this._show(this.activatedSteps[this.activatedSteps.length - 2], true);	
				}
			}
			return false;
		},
	   
		_continueToNextStep : function(){
			if(this.isLastStep){ 
				for(var i = 0; i < this.activatedSteps.length; i++){
					this.steps.filter("#" + this.activatedSteps[i]).find(":input").not(".wizard-ignore").removeAttr("disabled");
				}
				if(this.options.formPluginEnabled){ 
					this._disableNavigation();
					this.element.ajaxSubmit(this.options.formOptions);
					return false;
				}
				this.element.submit();
				return false;
			}
			
			var step = this._navigate(this.currentStep);
			if(step == this.currentStep){
				return;
			}
			if(this.options.historyEnabled){
				this._updateHistory(step);
			}else{
				this._show(step, true);
			}			
		},
	
		_updateHistory : function(step){
			var state = {};
			state["_" + $(this.element).attr('id')] = step;
			$.bbq.pushState(state);
			// manually trigger hashchange in ie7 and below
			var browser = $.browser;
		    var mode = document.documentMode;
		    if (browser.msie !== undefined && ( mode === undefined || mode < 8 )) {
				jQuery(window).trigger( 'hashchange' );
		    }
		},
		
		_disableNavigation : function(){
			this.nextButton.attr("disabled","disabled").removeClass("ui-state-active").addClass("ui-state-disabled");
			this.backButton.attr("disabled","disabled").removeClass("ui-state-active").addClass("ui-state-disabled");
		},
	
		_enableNavigation : function(){
			// REMOVED FOR SIRIUS XM!
//			if(this.isLastStep){
//				this.nextButton.val(this.options.textSubmit);
//			}else{
//				this.nextButton.val(this.options.textNext);
//			}
		
			if($.trim(this.currentStep) !== this.steps.eq(0).attr("id"))
				this.backButton.removeAttr("disabled").removeClass("ui-state-disabled").addClass("ui-state-active");
				
			this.nextButton.removeAttr("disabled").removeClass("ui-state-disabled").addClass("ui-state-active");
		},
		   
		_animate : function(oldStep, newStep){
			this._disableNavigation();
			var old = this.steps.filter("#" + oldStep);
			var current = this.steps.filter("#" + newStep);
			old.find(":input").not(".wizard-ignore").attr("disabled","disabled");
			current.find(":input").not(".wizard-ignore").removeAttr("disabled");
			var wizard = this;
			old.animate(wizard.options.outAnimation, wizard.options.outDuration, wizard.options.easing, function(){
				//jQuery('html, body').animate({scrollTop:0},1000);
				current.animate(wizard.options.inAnimation, wizard.options.inDuration, wizard.options.easing, function(){
					if(wizard.options.focusFirstInput)
						current.find(":input:first").focus();
					wizard._enableNavigation();
					$(wizard.element).trigger('step_shown', $.extend({"isBackNavigation" : false},wizard._state()));
				});
				return;
			});
		},
	
		_checkIflastStep : function(step){
			this.isLastStep = false;
			if($("#" + step).hasClass(this.options.submitStepClass) || this.steps.filter(":last").attr("id") == step){
				this.isLastStep = true;
			}
		},
	   
		_getLink : function(step){
			var link = undefined;
			var links = this.steps.filter("#" + step).find(this.options.linkClass);

			if(links != undefined){
				if(links.filter(":radio,:checkbox").size() > 0){
					link = links.filter(this.options.linkClass + ":checked").val();
				}else{
					link = $(links).val();				
				}
			}
			return link;
		},
	   
		_navigate : function(step){
			var link = this._getLink(step);
			if(link != undefined){
				if((link != "" && link != null && link != undefined) && this.steps.filter("#" + link).attr("id") != undefined){
					return link;
				}
				return this.currentStep;				
			}else if(link == undefined && !this.isLastStep){	
				var step1 =  this.steps.filter("#" + step).next().attr("id");
				return step1;
			}
		},
	   
		_show : function(step){
			jQuery('html, body').animate({scrollTop:0},400);
			var backwards = false;
			if(step == undefined || step == ""){ 
					this.activatedSteps.pop();
					step = this.firstStep;
					this.activatedSteps.push(step);
			}else{		
				if($.inArray(step, this.activatedSteps) > -1){
					backwards = true;
					this.activatedSteps.pop();
				}else {
					this.activatedSteps.push(step);
				}
			}

			if(this.currentStep !== step || step === this.firstStep){
				this.previousStep = this.currentStep;
				this._checkIflastStep(step);
				this.currentStep = step;

				this._animate(this.previousStep, step);
			}
			
		},
	   
	   _reset : function(){
			this.element.resetForm()
			$("label,:input,textarea",this).removeClass("error");		
			for(var i = 0; i < this.activatedSteps.length; i++){
				this.steps.filter("#" + this.activatedSteps[i]).hide().find(":input").attr("disabled","disabled");
			}
			this.activatedSteps = new Array();
			this.previousStep = undefined;	
			this.isLastStep = false;	
			if(this.options.historyEnabled){
				this._updateHistory(this.firstStep);
			}else{
				this._show(this.firstStep);
			}

		},

		_state : function(state){
			var currentState = { "settings" : this.options,
				"activatedSteps" : this.activatedSteps,
				"isLastStep" : this.isLastStep,
				"isFirstStep" : this.currentStep === this.firstStep,
				"previousStep" : this.previousStep,
				"currentStep" : this.currentStep,
				"backButton" : this.backButton,
				"nextButton" : this.nextButton,
				"steps" : this.steps,
				"firstStep" : this.firstStep
			}
			
			if(state !== undefined)
				return currentState[state];
				
			return currentState;
		},
	   
	  /*Methods*/
	  
		show : function(step){
			if(this.options.historyEnabled){
				this._updateHistory(step);
			}else{
				this._show(step);
			}
		},

		state : function(state){
			return this._state(state);
		},		

		reset : function(){
			this._reset();
		},
		
		next : function(){
			this._next();		
		},
		
		back : function(){
			this._back();
		},
		
		destroy: function() {
			this.element.find("*").removeAttr("disabled").show();
			this.nextButton.unbind("click").val(this.nextButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
			this.backButton.unbind("click").val(this.backButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
			this.backButtonInitinalValue = undefined;
			this.nextButtonInitinalValue = undefined;
			this.activatedSteps = undefined;
			this.previousStep = undefined;
			this.currentStep = undefined;
			this.isLastStep = undefined;
			this.options = undefined;
			this.nextButton = undefined;
			this.backButton = undefined;
			this.formwizard = undefined;
			this.element = undefined;
			this.steps = undefined;
			this.firstStep = undefined;
		},
		
		update_steps : function(){
			this.steps = this.element.find(".step");
			this.steps.not("#" + this.currentStep).hide().addClass("ui-formwizard-content ui-helper-reset ui-corner-all");
			this.steps.find(":input").addClass("ui-wizard-content ui-helper-reset ui-state-default");
			
		},

		options: {
	   		historyEnabled	: false,
			validationEnabled : false,
			validationOptions : undefined,
			formPluginEnabled : false,
			linkClass	: ".link",
			submitStepClass : "submit_step",
			back : ":reset",
			next : ":submit",
			textSubmit : 'Submit',
			textNext : 'Next',
			textBack : 'Back',
			remoteAjax : undefined, 
			inAnimation : {opacity: 'show'},
	        outAnimation: {opacity: 'hide'},
			inDuration : 400,
			outDuration: 400,
			easing: 'swing',
			focusFirstInput : false,
			disableInputFields : true,
			formOptions : { reset: true, success: function(data) { alert("success"); } 
		}
   }
 });
})(jQuery);
