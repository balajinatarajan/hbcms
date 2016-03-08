/*

Copyright (c) 2009 Stefano J. Attardi, http://attardi.org/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
Labels = function(container) {
	this.init(container);
};

jQuery.extend(Labels.prototype,
{
	container: null,
    init : function(container) {
		var thisContext = this;
		if (container == null) {
			container = jQuery(document);
		}
		var inputs = container.find('input, textarea');
		inputs.bind('keydown', this.toggleLabel);
		inputs.bind('paste', this.toggleLabel);
		inputs.bind('change', this.toggleLabel);
		
		var selects = container.find('select')
		selects.bind('change', this.toggleLabel);
	
		inputs.bind('focusin', function() {
			jQuery(this).prev('span').css('color', '#ccc');
	    });
		inputs.bind('focusout', function() {
			jQuery(this).prev('span').css('color', '#999');
	    });
	
		jQuery(function() {
			inputs.each(function() { thisContext.toggleLabel.call(this); });
	    });
	},
	toggleLabel : function () {
        var input = jQuery(this);
        setTimeout(function() {
            if (!input.val()) {
                input.prev('span').css('visibility', '');
            } else {
                input.prev('span').css('visibility', 'hidden');
            }
        }, 0);
    }, 

    resetField : function () {
        var def = jQuery(this).attr('title');
        if (!jQuery(this).val() || ($(this).val() == def)) {
        	jQuery(this).val(def);
        	jQuery(this).prev('span').css('visibility', '');
        }
    }

});

jQuery(function() {
	jQuery(document).bind('PAGE_CHANGE', function(e, pageId, flowId, divLoaded) {
		new Labels(divLoaded);
	});
});
