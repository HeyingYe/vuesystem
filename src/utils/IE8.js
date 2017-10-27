
const Browser = (function(){
	var Agent = navigator.userAgent.toLowerCase();
	var browser = {};
	var reg = {
		IE:/msie\s[\d.]+/gi,
		Firefox:/firefox\/[\d.]+/,
		Chrome:/chrome\/[\d.]+/gi,
		Safari:/safari\/[\d.]+/gi,
		version:/[^0-9.]/gi,
		type:/[^a-z]/gi
	};
	if(Agent.indexOf("msie") > 0){
		browser.info = Agent.match(reg.IE) + "";
		browser.type = (Agent.match(reg.IE) + "").replace(reg.type,"");
		browser.version = (Agent.match(reg.IE) + "").replace(reg.version,"");
	}else if(Agent.indexOf("firefox") > 0){
		browser.info = Agent.match(reg.Firefox) + "";
		browser.type = (Agent.match(reg.Firefox) + "").replace(reg.type,"");
		browser.version = (Agent.match(reg.Firefox) + "").replace(reg.version,"");
	}else if(Agent.indexOf("chrome") > 0){
		browser.info = Agent.match(reg.Chrome) + "";
		browser.type = (Agent.match(reg.Chrome) + "").replace(reg.type,"");
		browser.version = (Agent.match(reg.Chrome) + "").replace(reg.version,"");
	}else if(Agent.indexOf("safari") > 0){
		browser.info = Agent.match(reg.Safari) + "";
		browser.type = (Agent.match(reg.Safari) + "").replace(reg.type,"");
		browser.version = (Agent.match(reg.Safari) + "").replace(reg.version,"");
	}else{
		browser.type = "An unknown Browser";
	}

	return browser;
})()

export default Browser