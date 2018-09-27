function appViewModel(){
    var self = this;

    // Coloquei as variaveis em pt pros alunos mexerem nesse arquivo
    self.feriados = ko.observableArray([]);
    self.cidadeSelecionada = ko.observable("");
    

    // Claramente isso nao ta funcionando 
    if(self.cidadeSelecionada() != ""){
        getHolidays(self.cidadeSelecionada, 'RS', '2018');
    }
}

vm = new appViewModel();
ko.applyBindings(vm);