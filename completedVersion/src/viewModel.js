function appViewModel(){
    var self = this;

    self.cidadeSelecionada = ko.observable("");

    self.feriados = ko.computed(function(){
    	return getFeriados(self.cidadeSelecionada());
    }, self);

}

vm = new appViewModel();
ko.applyBindings(vm);