// Inicializar el mapa centrado en Aguascalientes
var map = L.map('map').setView([21.88234, -102.28259], 13); // Coordenadas de Aguascalientes
// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '© OpenStreetMap'
}).addTo(map);

// Añadir un marcador en Aguascalientes capital
var marker = L.marker([21.88234, -102.28259]).addTo(map);
// Añadir un pop-up al marcador
marker.bindPopup("<b>¡Bienvenidos a Aguascalientes!</b><br>Capital del Estado.").openPopup();

// Marcador en la Plaza de la Patria
var plazaPatria = L.marker([21.88187, -102.29495]).addTo(map);
plazaPatria.bindPopup("<b>Plaza de la Patria</b><br>Corazón de Aguascalientes.");

// Marcador en el Museo Nacional de la Muerte
var museoMuerte = L.marker([21.88417, -102.28878]).addTo(map);
museoMuerte.bindPopup("<b>Museo Nacional de la Muerte</b><br>Un lugar único.");

// Dibujar un círculo en el recinto de la Feria Nacional de San Marcos
var feriaSanMarcos = L.circle([21.87888, -102.29727], {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5,
    radius: 300
   }).addTo(map);
   feriaSanMarcos.bindPopup("<b>Feria Nacional de San Marcos</b><br>El evento más importante de Aguascalientes.");

   var centroHistorico = L.polygon([
    [21.8821, -102.2935],
    [21.8829, -102.2865],
    [21.8797, -102.2860],
    [21.8792, -102.2920]
   ]).addTo(map);
   centroHistorico.bindPopup("<b>Centro Histórico de Aguascalientes</b><br>Una joya colonial.");

   var baseMaps = {
    "Mapa base": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
   };
   var overlayMaps = {
    "Lugares importantes": L.layerGroup([marker, plazaPatria, museoMuerte]),
    "Feria de San Marcos": feriaSanMarcos,
    "Centro Histórico": centroHistorico
   };
   L.control.layers(baseMaps, overlayMaps).addTo(map);

   // MARCADORES PERSONALIZADOS ---------------------------------------------------
   var customIcon = L.icon({
    iconUrl: 'https://icons.getbootstrap.com/icons/buildings/',  
    iconSize: [38, 38],               
    iconAnchor: [22, 38],             
    popupAnchor: [-3, -38]           
});
   // Marcador en Estadio Victoria
var plazaPatria = L.marker([21.88104030701037, -102.27565660345215], {icon: customIcon}).addTo(map);
plazaPatria.bindPopup("<b>Estadio Victoria</b><br>Casa del equipo Necaxa.");


   // Marcador en Centro Comercial Villa Asuncion
   var plazaPatria = L.marker([21.84999955565874, -102.29297673200446]).addTo(map);
   plazaPatria.bindPopup("<b>Centro Comercial Villa Asuncion</b><br>Lugar para comer y comprar.");

        // Marcador en Baño termales
      var plazaPatria = L.marker([21.88450104620454, -102.2674048259681]).addTo(map);
      plazaPatria.bindPopup("<b>Baños Termales</b><br>Lugar para disfrutar albercas termales.");

       // Marcador en Foro de las Estrellas
       var plazaPatria = L.marker([21.868578119768664, -102.25718113696321]).addTo(map);
       plazaPatria.bindPopup("<b>Parque Recreativo Ecológico El Cedazo</b><br>Parque natural para la familia.");

   // Marcador en Centro Comercial Espacio
   var plazaPatria = L.marker([21.879845420134515, -102.26049172305437]).addTo(map);
   plazaPatria.bindPopup("<b>Centro Comercial Espacio</b><br>Centro comercial con varios lugares a visitar.");

    // Marcador en Club Campestre
    var plazaPatria = L.marker([21.921206641963202, -102.32006894968576]).addTo(map);
    plazaPatria.bindPopup("<b>Club Campestre</b><br>Lugar para disfrutar un bune juego de golf.");

    // Marcador en Isla San Marcos
    var plazaPatria = L.marker([21.861116936653822, -102.32109891741325]).addTo(map);
    plazaPatria.bindPopup("<b>Isla San Marcos</b><br>Hermosos lugar turistico para visitar con la familia.");
