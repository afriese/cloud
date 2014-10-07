$(function(){
	ko.applyBindings(FileModel(model));
	console.log("JHJH")
});

var model =	{
	"fields":[	{
		"name":"Abrechnung",
		"type":"input",
		"data":"24. April 2014"
	}
	]
}



var FileModel = function(data){
	this.fields = ko.observableArray(data.fields);
}

var Field = function(data){
	var self = this;
	self.name = ko.observable(data.name);
	self.data = ko.observable(data.data);
}