// function PhoenixPage(browser){
// 	BasePage.call(this);
// }
// PhoenixPage.prototype = new BasePage();
// PhoenixPage.prototype.constructor = PhoenixPage;


var PhoenixPage = function(browser){
	this.browser = browser;
	this.url = "http://localhost:3000/";

	PhoenixPage.prototype.open =  function(){
		browser.get(this.url);
	}
}

module.exports = PhoenixPage;
