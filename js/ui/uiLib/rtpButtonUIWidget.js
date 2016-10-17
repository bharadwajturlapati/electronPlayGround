rtp.ui.button = function(config){
	this.widget = "Button";
	this.name = "rtp.ui.Button";
	var text = config.text || "";	
	defineGetter(this, "text", function() {
		return text;
	});
	defineSetter(this, "text", function(val) {
		var oldvalue = text;
		text = val;
		$KW[this.widget]["updateView"](this,  "text" , val);
	});
}