(function() {

	var keys = [];
	var e = [];
	
	// Construcotr
	this.AccordionImages = function(){
		// defaults paramets
	    var defaults = {
	     
	    }

	    // Create options by extending defaults with the passed in arugments
	    if (arguments[0] && typeof arguments[0] === "object") {
	      this.options = extendDefaults(defaults, arguments[0]);
	    }

	    
		// Utility method to extend defaults with user options
		function extendDefaults(source, properties) {
			var property;
		   	for (property in properties) {
		    	if (properties.hasOwnProperty(property)) {
		       		source[property] = properties[property];
		    	}
		 	}

		    return source;
		}	
			
	}



	// Public init Method

	AccordionImages.prototype.init = function() {
		var myobj = this;
		// Push all to keys to be able to know the length
		for(var k in myobj.options) keys.push(k);
		
		// Push code to later get the data
		for(var i = 0; i < keys.length/2; i++) {
			e.push("myobj.options.image"+i);
			e.push("myobj.options.text"+i);
		}

	
		// Create Template with images and text
		this.createTemplate();
		
	}

	
	AccordionImages.prototype.createTemplate = function() {
		var myobj = this;
		var iterations = e.length;
		iterations = iterations / 2;
		
		var counterImages = 0;
		var counterText = 1;


		for(i = 0; i < iterations; i++) {

			var newElement = '<div class="item"><img src="'+eval(e[counterImages])+'"><span class="sub">'+eval(e[counterText])+'</div>';
			counterImages= counterImages + 2;
			counterText = counterText + 2;
			var bodyElement = document.getElementById("gal");
			bodyElement.innerHTML = newElement + bodyElement.innerHTML;
		}



	} 
	

	
	

}());

