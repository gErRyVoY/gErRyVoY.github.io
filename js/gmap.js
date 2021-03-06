var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) || (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));

var mapDiv = document.getElementById('googft-mapCanvas');

var todos = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: ""
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var agricultura = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Agricultura orgánica'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var alimentos = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Alimentos saludables'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var artecult = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Arte y cultura'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var artesanias = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Artesanías'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var bioconstruccion = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Bioconstrucción'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var ecoespacios = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Ecoespacios'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var ecoturismo = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Ecoturísmo'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var medicina = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Medicina alternativa'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var monedas = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Monedas comunitarias'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

var tecnologias = new google.maps.FusionTablesLayer({
	query: {
		select: "Geocode",
        from: "1Aj9TfYz1gIQDEcfyByRlL4zJfRIU6OO1mBtyBGH5",
        where: "Categoria = 'Tecnologías sustentables'"
	},
	options: {
       	styleId: 2,
       	templateId: 3
	}
});

function initialize() {
	
	if (isMobile) {
		var viewport = document.querySelector("meta[name=viewport]");
      	viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
	mapDiv.style.width = isMobile ? '100%' : '100%';
	mapDiv.style.height = isMobile ? '100%' : '100%';
	
    map = new google.maps.Map(mapDiv, {
    	center: new google.maps.LatLng(18.8833837, -99.063479),
      	zoom: 11,
		mapTypeControl: false,
    	mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ['roadmap', 'satellite']
		},
		zoomControl: false,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false,
		streetViewControl: false,
		fullscreenControl: false
    });	
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));
	
	todos.setMap(map);

    if (isMobile) {
    	var legend = document.getElementById('googft-legend');
      	var legendOpenButton = document.getElementById('googft-legend-open');
      	var legendCloseButton = document.getElementById('googft-legend-close');
		
      	legend.style.display = 'none';
      	legendOpenButton.style.display = 'block';
      	legendCloseButton.style.display = 'block';
      	legendOpenButton.onclick = function() {
        	legend.style.display = 'block';
        	legendOpenButton.style.display = 'none';
      	}
      	legendCloseButton.onclick = function() {
        	legend.style.display = 'none';
        	legendOpenButton.style.display = 'block';
      	}
    }	
}

function muestracatego(catego) {
	if (catego == "todos") {
		if (document.getElementById("todos").checked == true) {
			if (todos.getMap() == null) {
				todos.setMap(map);
				document.getElementById("agricultura").checked = true;
				document.getElementById("alimentos").checked = true;
				document.getElementById("artecult").checked = true;
				document.getElementById("artesanias").checked = true;
				document.getElementById("bioconstruccion").checked = true;
				document.getElementById("ecoespacios").checked = true;
				document.getElementById("ecoturismo").checked = true;
				document.getElementById("medicina").checked = true;
				document.getElementById("monedas").checked = true;
				document.getElementById("tecnologias").checked = true;
			}
		}
		if (document.getElementById("todos").checked == false) {
			todos.setMap(null);
			agricultura.setMap(null);
			document.getElementById("agricultura").checked = false;
			alimentos.setMap(null);
			document.getElementById("alimentos").checked = false;
			artecult.setMap(null);
			document.getElementById("artecult").checked = false;
			artesanias.setMap(null);
			document.getElementById("artesanias").checked = false;
			bioconstruccion.setMap(null);
			document.getElementById("bioconstruccion").checked = false;
			ecoespacios.setMap(null);
			document.getElementById("ecoespacios").checked = false;
			ecoturismo.setMap(null);
			document.getElementById("ecoturismo").checked = false;
			medicina.setMap(null);
			document.getElementById("medicina").checked = false;
			monedas.setMap(null);
			document.getElementById("monedas").checked = false;
			tecnologias.setMap(null);
			document.getElementById("tecnologias").checked = false;
		}
	}
	
	if (catego == "agricultura") {
		if (document.getElementById("agricultura").checked == true) {
			if (agricultura.getMap() == null) {
				agricultura.setMap(map);
			}
		}
		if (document.getElementById("agricultura").checked == false) {
			agricultura.setMap(null);
		}
	}
	
	if (catego == "alimentos") {
		if (document.getElementById("alimentos").checked == true) {
			if (alimentos.getMap() == null) {
				alimentos.setMap(map);
			}
		}
		if (document.getElementById("alimentos").checked == false) {
			alimentos.setMap(null);
		}
	}
	
	if (catego == "artecult") {
		if (document.getElementById("artecult").checked == true) {
			if (artecult.getMap() == null) {
				artecult.setMap(map);
			}
		}
		if (document.getElementById("artecult").checked == false) {
			artecult.setMap(null);
		}
	}
	
	if (catego == "artsanias") {
		if (document.getElementById("artesanias").checked == true) {
			if (artesanias.getMap() == null) {
				artesanias.setMap(map);
			}
		}
		if (document.getElementById("artesanias").checked == false) {
			artesanias.setMap(null);
		}
	}
	
	if (catego == "bioconstruccion") {
		if (document.getElementById("bioconstruccion").checked == true) {
			if (bioconstruccion.getMap() == null) {
				bioconstruccion.setMap(map);
			}
		}
		if (document.getElementById("bioconstruccion").checked == false) {
			bioconstruccion.setMap(null);
		}
	}
	
	if (catego == "ecoespacios") {
		if (document.getElementById("ecoespacios").checked == true) {
			if (ecoespacios.getMap() == null) {
				ecoespacios.setMap(map);
			}
		}
		if (document.getElementById("ecoespacios").checked == false) {
			ecoespacios.setMap(null);
		}
	}
	
	if (catego == "ecoturismo") {
		if (document.getElementById("ecoturismo").checked == true) {
			if (ecoturismo.getMap() == null) {
				ecoturismo.setMap(map);
			}
		}
		if (document.getElementById("ecoturismo").checked == false) {
			ecoturismo.setMap(null);
		}
	}
	
	if (catego == "medicina") {
		if (document.getElementById("medicina").checked == true) {
			if (medicina.getMap() == null) {
				medicina.setMap(map);
			}
		}
		if (document.getElementById("medicina").checked == false) {
			medicina.setMap(null);
		}
	}
	
	if (catego == "monedas") {
		if (document.getElementById("monedas").checked == true) {
			if (monedas.getMap() == null) {
				monedas.setMap(map);
			}
		}
		if (document.getElementById("monedas").checked == false) {
			monedas.setMap(null);
		}
	}
	
	if (catego == "tecnologias") {
		if (document.getElementById("tecnologias").checked == true) {
			if (tecnologias.getMap() == null) {
				tecnologias.setMap(map);
			}
		}
		if (document.getElementById("tecnologias").checked == false) {
			tecnologias.setMap(null);
		}
	}
}

google.maps.event.addDomListener(window, 'load', initialize);