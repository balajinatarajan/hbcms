
AlcManager = function(params) {
	this.init(params);
};

jQuery.extend(AlcManager.prototype,
{
	params : null,
	selectedPackage : "",
	// ALC Data
	alcPackages : new Array(),
	prevpkg : "",
	changefee : "0",
	loadingTimer : null,
	keepAliveTimer : null,
	packageSelection : null,
	debug : false,
	
	init : function(params){
		this.params = params;
		try {
			document.domain=params.documentDomain;
		} catch (err){
		}
		
		this.params.csDialog.dialog({
	        autoOpen: false,
			bgiframe: true,
			modal: true,
			draggable:true,
			resizable:false,
			width:"755px",
			minHeight:790,
			closeOnEscape: false,
			show:"fade",
			hide:"fade",
			buttons: []
		});

	},
	onLoadCS : function(){
		if (this.debug) alert("in onLoadCS()");
		clearTimeout(this.loadingTimer);
		this.showChannelSelector();
		this.keepAlive();
	},
	
	onSubmitPackageSelection : function (planDescriptors,packagesSelected, packageSelectionObject){
		var isALCPackage = false;
		this.packageSelection = packageSelectionObject;
		var alcmanager = this;
		jQuery.each(planDescriptors,function(){
			alcmanager.selectedPackage = packagesSelected[this].type;
			if (alcmanager.debug) alert("in onSubmitPackageSelection()");
			isALCPackage = isALCPackage || packagesSelected[this].isALCPackage;
			if (packagesSelected[this].isALCPackage){
				if (alcmanager.debug) alert("Loading channel selector...");
				alcmanager.loadChannelSelector();
				
				return;
			}
			
		});
		
		return !isALCPackage;

	},
	
	
	
	selectChannels : function (esn, payload, overage, check){
		if (this.debug) alert("in selectChannels()");
		this.hideChannelSelector(false);
		clearTimeout(this.keepAliveTimer);
		if (this.debug) alert("got ALC Data:\nESN: "+esn+"\nPayload: "+payload+"\nOverage: "+overage+"\nCheck: "+check);
		this.params.esnField.val(esn);
		this.params.payloadField.val(payload);
		this.params.overageField.val(overage);
		this.params.checkField.val(check);
		this.packageSelection.completeAlc();
	},
	
	keepAlive : function (){
		var thisContext = this;
		if (this.debug) alert("in keepAlive()");
		jQuery.ajax({url:thisContext.params.keepAliveURL, async:true});
		this.keepAliveTimer=setTimeout(this.keepAlive, 300000);
	},
	
	loadChannelSelector : function (){
		var loadurl=this.generateCSURL();
		if (loadurl != ""){
			this.loadingTimer=setTimeout(this.showCSError, 15000);
			jQuery('#channelcontainer').attr('src', loadurl);
		} else {
			this.showCSError();
		}
	},
	
	generateCSURL : function (){
		if (this.params.csurl=="") return "";
		var gCSURL=this.params.csurl+"&package="+this.selectedPackage;
		if (this.params.selectedTerm!="") gCSURL +="&term="+this.params.selectedTerm;
		if (this.params.esn!="") gCSURL +="&esn="+this.params.esn;
		if (this.params.acct!="") gCSURL +="&acct="+this.params.acct;
		if (this.params.flow!="") gCSURL +="&flow="+this.params.flow;
		gCSURL +="&feeindicator="+this.changefee;
		gCSURL +="&priorpackage="+this.prevpkg;
		gCSURL +="&payload="+this.params.payload;
		
		return gCSURL;
	},
	
	showCSError : function (){
		if (this.debug) alert("Error loading channel selector!");
		jQuery("#loading_div_"+this.selectedPackage).hide();
		jQuery("#alc_loading_error_div_"+this.selectedPackage).show();
		jQuery("#cs_loading_div").hide();
		jQuery("#alc_loading_error_div").show();
		clearTimeout(this.loadingTimer);
	},
	
	showChannelSelector : function (){
		if (this.debug) alert ("in showChannelSelector()");
		this.params.csDialog.dialog("open");
	},
	
	hideChannelSelector : function (){
		this.params.csDialog.dialog("close");
	},
	exitCS : function (status){
		if (this.debug) alert("in onCSExit(), status="+status);
		this.hideChannelSelector();
		clearTimeout(this.keepAliveTimer);
	}


});
