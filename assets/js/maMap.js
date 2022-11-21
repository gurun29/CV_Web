var lat;
var lon;
// On initialise la latitude et la longitude de Paris (centre de la carte)

var map = null;

window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    var lat = 48.852969;
    var lon = 2.349903;
    initMap(lat,lon); 
};


// Nous initialisons une liste de marqueurs
var villes = {
	"Paris":{"lat": 48.852969,"lon": 2.349903,"url":"http://www.google.com/"},
	"Brest":{"lat": 48.383,"lon": -4.500,"url":"http://www.google.com/"},
	"Quimper":{"lat": 48.000,"lon": -4.100,"url":"http://www.google.com/"},
	"Bayonne":{"lat": 43.500,"lon": -1.467,"url":"http://www.google.com/"},
    "Aso":{"lat": 42.56216062387368,"lon": 0.047853647265553974,"url":"https://www.alltrails.com/fr/randonnee/spain/huesca/ermita-de-san-urbez-cascada-del-aso/"},
    "Puymorens":{"lat": 42.564779,"lon": 1.82835,"url":"https://www.visorando.com/randonnee-porte-puymorens-refuge-des-besines/"}
};
function initMap(lat,lon) {
    var lat = lat;
    var lon = lon;
	map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(lat, lon),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: true,
		scrollwheel: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		},
		navigationControl: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.ZOOM_PAN
		}
	});
	// Nous parcourons la liste des villes
	for(ville in villes){
		var marker = new google.maps.Marker({
			// A chaque boucle, la latitude et la longitude sont lues dans le tableau
			position: {lat: villes[ville].lat, lng: villes[ville].lon},
			// On en profite pour ajouter une info-bulle contenant le nom de la ville
			title: ville,
            //icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Map_pin_icon_green.svg",
			map: map,
            url: villes[ville].url
		});	
        /*
        google.maps.event.addListener(marker, 'click', function() {
            window.location.href = marker.url;
          });
          */
	}

}

    
    
    

