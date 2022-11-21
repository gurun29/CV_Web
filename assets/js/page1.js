
function doThing(){
    alert('Horray! Someone wrote "' + this.value + '"!');
 }

 function doThing2(){
    //alert('2222222222222222! Someone wrote "' + this.value + '"!');
    //var map = null;
    //var latitude = 48.852969;
    //var longitude = 2.349903;
  //initMap(latitude,longitude)
  //map.centrerMap
 
  let testMap = document.getElementById("map");
  //console.debug(map.zoom)
  //testMap.zoom = 4;
  //alert(map.zoom);
  map.zoom = 6;
  //alert(photoAAAA.display);
  if (this.value == 1) {
    initMap(42.56216062387368, 0.047853647265553974)
    photoAAAA.style.display = "block";
    photoB.style.display = "none";
  } else {
    initMap(42.564779, 1.828350)
    photoB.style.display = "block";
    photoAAAA.style.display = "none";
  }
  
  
  
}


(function () {

    photoAAAA.style.display = "none";
    photoB.style.display = "none";
    /* event listener */
    document.getElementsByName("Thing")[0].addEventListener('change', doThing);
    document.getElementsByName("Thing2")[0].addEventListener("change", doThing2);
    
    /* function */

    

/*
    let centrerMap = document.getElementById("photoAAAA");
    centrerMap.addEventListener("click", () => {
    
      //console.debug("test");
      centrerMap.style.display = "none";
      alert(centrerMap.style.display);
    })
    //centrerMap.style.display = "none";
    
    function initMap2() {

        map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(48.8, 2.5),
            zoom: 11,
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
                map: map
            });	
        }
    }
    */

   }
    
    
    )()
