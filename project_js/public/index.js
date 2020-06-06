
$('.pink').click(function() {
	$('.pink').hide( "shake", 'slow', function() {
		$('.pink').show('fast', function() {
			$('.pink').css('background-color', 'blue')
		})
	});
})


//Estamos obteniendo datos del API de mercado libre, categorías.
$.get( "https://api.mercadolibre.com/sites/MLA/categories").done(
	//Una vez que la petición fue completada, ejecutamos una función.
	function(data) {
		//Imprimiento en consola los datos que nos mando mercado libre
		console.log(data)
		//Estamos iterando por cada categoría de las categorías que nos mando mercado libre
		for(let i = 0; i < data.length; i++) {
			//Estamos creando un nuevo párrafo con los datos de la categoría
			//La i indica la posición del arreglo
			//.name indica el atributo al que estamos accediendo
			$('.pink').append('<p></p>', data[i].name)
		}
 	}
);

//Al dar click al botón, ejecutamos una acción.
$('button').click(function() {
	//Así obtenemos los valores de un formulario
	var name = $( "input[type=text][name=name]" ).val();
	//Así mandamos los valores de mi formulario a un API
	$.post('https://api.sandbox.paypal.com/v1/payments/payment', {"name": name})
})











