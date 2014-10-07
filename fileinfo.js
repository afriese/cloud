$(function(){
ko.bindingHandlers.radio = {
  init: function(element, valueAccessor, allBindings, data, context) {
    var $buttons, $element, elementBindings, observable;
    observable = valueAccessor();
    if (!ko.isWriteableObservable(observable)) {
      throw "You must pass an observable or writeable computed";
    }
    $element = $(element);
    if ($element.hasClass("btn")) {
      $buttons = $element;
    } else {
      $buttons = $(".btn", $element);
    }
    elementBindings = allBindings();
    $buttons.each(function() {
      var $btn, btn, radioValue;
      btn = this;
      $btn = $(btn);
      radioValue = elementBindings.radioValue || $btn.attr("data-value") || $btn.attr("value") || $btn.text();
      $btn.on("click", function() {
        observable(ko.utils.unwrapObservable(radioValue));
      });
      return ko.computed({
        disposeWhenNodeIsRemoved: btn,
        read: function() {
          $btn.toggleClass("active", observable() === ko.utils.unwrapObservable(radioValue));
        }
      });
    });
  }
};

ko.bindingHandlers.checkbox = {
  init: function(element, valueAccessor, allBindings, data, context) {
    var $element, observable;
    observable = valueAccessor();
    if (!ko.isWriteableObservable(observable)) {
      throw "You must pass an observable or writeable computed";
    }
    $element = $(element);
    $element.on("click", function() {
      observable(!observable());
    });
    ko.computed({
      disposeWhenNodeIsRemoved: element,
      read: function() {
        $element.toggleClass("active", observable());
      }
    });
  }
};


	ko.applyBindings(FileModel(model));
	console.log("JHJH")
});

var model =	{
	"fields":[	{
		"name":"Abrechnung",
		"type":"input",
		"data":"24. April 2014"
	},{
		"name":"Beschreibung",
		"type":"textarea",
		"data":"some interesting description"
	}
	]
}



var FileModel = function(data){
	this.test = ko.observable("JJJ")
	this.editmode = ko.observable("false");

	var f = [];
	for( var i in data.fields)
		f.push(new Field(data.fields[i]));

	this.fields = ko.observableArray(f);
}

var Field = function(data){
	var self = this;
	self.name = ko.observable(data.name);
	self.type = ko.observable(data.type);
	self.data = ko.observable(data.data);
}


