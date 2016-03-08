jQuery(function($){
    $('.navigation-item.listen a, .listen-online, #listen-online').click(function(e) {
        e.preventDefault();
        var umplink = $('.navigation-item.listen a').attr("href");        
        var wo = window.open(umplink, 'umpwindow');
        return false;
    });
});


if(!SXM) var SXM = {};
SXM.dropdown = {

    init: function() {
    
        jQuery('body.ie6 div.dropdown').hover(
            function() {
                var obj = jQuery(this);
                var parent = obj.parent();
                if(parent.hasClass('subscriptions')) parent.addClass('subscriptions-over');
                if(parent.hasClass('what-is-on')) parent.addClass('what-is-on-over');
                obj.addClass('dropdown-hover');
            },
            function() {
                var obj = jQuery(this);
                var parent = obj.parent();
                if(parent.hasClass('subscriptions')) parent.removeClass('subscriptions-over');
                if(parent.hasClass('what-is-on')) parent.removeClass('what-is-on-over');
                obj.removeClass('dropdown-hover');
            }    
        );            
    }
};





//*dp 11/07/11: Global cookie handling - uncompressed: sxm-cookies.js */
function sxmCheckCookieCount(a,b){var c=false;var d=sxmGetCookie(a);if(d){var e=parseInt(d);if(e<b){c=false}else{c=true}}return c}function sxmSetCookie(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c*24*60*60*1e3);var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/;domain=.siriusxm.com;"}function sxmGetCookie(a){var b=a+"=";var c=b.length;var d=document.cookie.length;var e=0;while(e<d){var f=e+c;if(document.cookie.substring(e,f)==b)return sxmGetCookieVal(f);e=document.cookie.indexOf(" ",e)+1;if(e==0)break}return null}function sxmGetCookieVal(a){var b=document.cookie.indexOf(";",a);if(b==-1)b=document.cookie.length;return unescape(document.cookie.substring(a,b))}function sxmIncreaseCookieCount(a,b){var c=sxmGetCookie(a);if(c){var d=parseInt(c);var e=d+1;sxmSetCookie(a,e,b)}else{sxmSetCookie(a,1,b)}}