// Função de requisição dos feriados
var feriados = [];

function getFeriados(city){
	return feriados[city];
}

(function(){

var citys = ["DOISIRMAOS","ERECHIM","PASSO_FUNDO","PORTO_ALEGRE","RIO_GRANDE"];
var ano = '2018';
var estado = 'RS'; 
var token = 'ZXJpY2subG9wZXNAY29tcGFzc28uY29tLmJyJmhhc2g9MjI0Nzk0ODMx';

	citys.forEach(function(city){

		var url = 'https://api.calendario.com.br/?json=true&ano='+ano+'&estado='+estado+'&cidade='+city+'&token='+token;

		var xhttp = new XMLHttpRequest();
		  
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(this.responseText);
				feriados[city] = data; 
			}
		};

		xhttp.open("GET", url, true);
		xhttp.send();

	});
})();
