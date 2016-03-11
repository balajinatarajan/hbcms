var url_base = "http://dvgllvfatapp10.corp.siriusxm.com:9080";
//var url_base = "http://cmsauthor:9080";

Handlebars.registerHelper('curly', function(object, open) {
    return open ? '{{' : '}}';
});

function gethtml(name){
    return $.ajax({
        url: url_base + "/cs/Satellite?pagename=CAAS/GetTemplate&cid=" + name,
        dataType: "jsonp"
    });
}

function getOfferData(id){ 
    return $.ajax({
        url: url_base + "/cs/Satellite?pagename=CAAS/Offer/JSON&cid=" + id,
        dataType: "jsonp"
    });
}

function getPackageData(id){ 
    return $.ajax({
        url: url_base + "/cs/Satellite?pagename=CAAS/Package/JSON&cid=" + id,
        dataType: "jsonp"
    });
}

function process(html,data,divid) {
    $.when(gethtml(html), getOfferData(data)).done(function(htmlresult,dataresult){
        var interim_template = Handlebars.compile(htmlresult[0].source);
        var interim_result = interim_template(dataresult[0]);

        var final_template =  Handlebars.compile(interim_result);
        var result = final_template(SMS_DATA);
        $('#' + divid).html(result);
    });
}

function getPackage(html,data,divid) {
    $.when(gethtml(html), getPackageData(data)).done(function(htmlresult,dataresult){
        var interim_template = Handlebars.compile(htmlresult[0].source);
        var interim_result = interim_template(dataresult[0]);

        var final_template =  Handlebars.compile(interim_result);
        var result = final_template(SMS_DATA);
        $('#' + divid).html(result);
    });
}

function processDOTCOM(html,data,divid) {
    $.when(gethtml(html), getPackageData(data)).done(function(htmlresult,dataresult){
        var template = Handlebars.compile(htmlresult[0].source);
        var result = template(dataresult[0]);

        $('#' + divid).html(result);
    });
}

function compareChannels(pkg1,pkg2,pkg3, divid) {
    $.when(getPackageData(pkg1),getPackageData(pkg2),getPackageData(pkg3)).done(function(data1,data2,data3){
        var leftData = {};var middleData = {};var rightData = {};
        if (data1[0].Channels.length > data2[0].Channels.length){
            if(data1[0].Channels.length > data3[0].Channels.length) {
                leftData = data1[0];middleData = data2[0];rightData = data3[0];
            } else {
                leftData = data3[0];middleData = data2[0];rightData = data1[0];
            }
        } else {
            if(data2[0].Channels.length > data3[0].Channels.length) {
                leftData = data2[0];middleData = data1[0];rightData = data3[0];
            } else {
                leftData = data3[0];middleData = data2[0];rightData = data1[0];
            }
        }

        var rowHtml = '<div class="row"><div class="col col-xs-1"></div><div class="col col-xs-4"><h4>Channels</h4></div><div class="col col-xs-2"><h4>'+leftData.PackageName+'</h4></div><div class="col col-xs-2"><h4>'+middleData.PackageName+'</h4></div><div class="col col-xs-3"><h4>'+rightData.PackageName+'</h4></div></div>';
        $.each(leftData.Channels, function(){
            var leftChName = this.name; 
            rowHtml += '<div class="row"><div class="col col-xs-1"></div><div class="col col-xs-4"><img src="' + this.logo + '" width="50%"></div><div class="col col-xs-2" style="margin-top:25px;margin-left:5px;"><h3><span style="color:green;">&#10004;</span></h3></div>';
            var middleChAvail = false;
            $.each(middleData.Channels, function(){
               if(this.name == leftChName) {
                   middleChAvail = true;
               } 
            });
            if(middleChAvail) {
                rowHtml += '<div class="col col-xs-2" style="margin-top:25px;margin-left:5px;"><h3><span style="color:green;">&#10004;</span></h3></div>';
            } else {
                rowHtml += '<div class="col col-xs-2" style="margin-top:25px;margin-left:5px;"><h3><span style="color:red;">&#10008;</span></h3></div>';
            }
            
            var rightChAvail = false;
            $.each(rightData.Channels, function(){
               if(this.name == leftChName) {
                   rightChAvail = true;
               } 
            });
            if(rightChAvail) {
                rowHtml += '<div class="col col-xs-2" style="margin-top:25px;margin-left:5px;"><h3><span style="color:green;">&#10004;</span></h3></div>';
            } else {
                rowHtml += '<div class="col col-xs-2" style="margin-top:25px;margin-left:5px;"><h3><span style="color:red;">&#10008;</span></h3></div>';
            }
            
            rowHtml += '<div class="col col-xs-1"></div></div>';
        });
        $('#' + divid).html(rowHtml);
    });
}