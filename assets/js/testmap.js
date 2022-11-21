/**
 * Mouse Events on Maps
 */

 $(document).ready(function(){
  var map = new GMaps({
     el: '#mouse_event_map',
     lat: 42.992963,
     lng: 1.008635,
     zoom: 6,
     zoomControl : true,
     zoomControlOpt: {
         style : 'SMALL',
         position: 'TOP_LEFT'
     },
     panControl : false,
     click: function(e){
       alert('Click event');
     },
     dragend: function(e){
       alert('Drag Event');
     }
   });
 });

 /**
  * Basic Map
  */

$(document).ready(function(){
  var map = new GMaps({
     el: '#basic_map',
     lat: 42.992963,
     lng: 1.008635,
     zoom: 12,
     zoomControl : true,
     zoomControlOpt: {
         style : 'SMALL',
         position: 'TOP_LEFT'
     },
     panControl : false,
   });
   
   map.addMarker({
    lat: 42.992963,
    lng: 1.008635,
    title:"a",
    infoWindow: {
      content: "Her Majesty\'s Royal Palace and Fortress, more commonly known as the Tower", display:true },
      
    
  });

 });

 (function () {

  let centrerMapA = document.getElementById("photoD");
  centrerMapA.addEventListener("click", () => {
  
    //console.debug("test");
    centrerMapA.hidden = true;
    
  })

  photoD.hidden = true;
  photoD.style.display = "none";

});