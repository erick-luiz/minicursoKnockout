// Função de requisição dos feriados

function getHolidays(city, state, year){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            vm.feriados(JSON.parse(xhttp.response));
            console.log(vm.feriados());
            
        }
    };
    
    xhttp.open('GET', 'https://api.calendario.com.br/?json=true&ano='+year+'&estado='+state+'&cidade='+city+'&ibge=3550308&token=YnJ1bm8uanVzdG9AY29tcGFzc28uY29tLmJyJmhhc2g9MTc0Mzg5MDMz', true);
    xhttp.send();
}

