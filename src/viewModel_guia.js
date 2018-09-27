function appViewModel(){
    var self = this;

    self.feriados = ko.observableArray([]);
    self.descricaoItem = ko.observable("");
    self.alerta = ko.observable({mostrar: false, mensagem: "Prontito!", tipo:"info"});
    
    self.addItem = function(){
        if(self.descricaoItem() == "")
            self.alerta({mostrar: true, mensagem: "Preencha a descrição", tipo:"warning"})
        else{
            self.lista.push({descricao: self.descricaoItem(), checado: ko.observable(false)});
            self.descricaoItem("");
            self.alerta({mostrar: true, mensagem: "Prontito!", tipo:"info"})
        }
    }; 

    self.itensChecked = ko.pureComputed(function(){
        var count = self.lista().filter(function(item){
            return item.checado();
        }).length;

        return count;
    });
    self.itensNotChecked = ko.pureComputed(function(){
        var count = self.lista().filter(function(item){
            return !item.checado();
        }).length;

        return count;
    });
}

vm = new appViewModel();
ko.applyBindings(vm);