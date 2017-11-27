var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}

// markers=color:blue%7Clabel:S%7C62.107733,-145.541936&markers=size:tiny%7Ccolor:green%7CDelta+Junction,AK
// &markers=size:mid%7Ccolor:0xFFFF00%7Clabel:C%7CTok,AK"