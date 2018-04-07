var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com');


  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);

  };
  this.level = ko.computed(function() {
    if(this.clickCount() > 200) {
        return 'Adult';
    }
    else if(this.clickCount() > 100) {
        return 'Teen';
    }
    else if (this.clickCount() > 50) {
        return 'Child';
    }
    else if(this.clickCount() > 20) {
        return 'Infant';
    }
    else return 'Newborn';
  }, this);


}

ko.applyBindings(new ViewModel())
