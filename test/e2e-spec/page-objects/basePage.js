var BasePage = function(browser, url){
	this.browser = browser;
	this.url = url;

	BasePage.prototype.open =  function(){
		browser.get(url);
	}
}
