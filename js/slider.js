//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btnsig');
var anterior = $('#btnant');

//mover ultima imagen al primer lugar
$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slider_section:first').insertAfter('#slider .slider_section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider_section:last').insertBefore('#slider .slider_section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

siguiente.on('click',function() {
	moverD();
});

anterior.on('click',function() {
	moverI();
});
