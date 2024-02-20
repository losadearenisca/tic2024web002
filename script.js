function obtenerUbicacion() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      var ubicacion = document.getElementById("ubicacion");

      ubicacion.innerHTML = "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;

      

    

      var mapa = L.map('mapa').setView([position.coords.latitude, position.coords.longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

      }).addTo(mapa);

      L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapa)

        .bindPopup('¡Estás aquí!')

        .openPopup();

    });

  } else {

    alert("La geolocalización no es soportada por este navegador.");

  }

}





document.getElementById("btnObtenerUbicacion").addEventListener("click", obtenerUbicacion);





document.getElementById("btnCreditos").addEventListener("click", mostrarCreditos);



document.getElementById("btnOcultar").addEventListener("click", ocultarSeccion1);



document.getElementById("btnMostrar").addEventListener("click", mostrarSeccion1);



document.getElementById("btnCambiarColor").addEventListener("click", cambiarColorSeccion1);







function mostrarCreditos() {



  alert("Alonso Rodriguez de la Calle \nNº27 2ºC ");



}







function ocultarSeccion1() {



  document.getElementById("seccion1").style.display = "none";



}







function mostrarSeccion1() {



  document.getElementById("seccion1").style.display = "block";



}







function cambiarColorSeccion1() {



  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);



  document.getElementById("seccion1").style.backgroundColor = randomColor;



}

function mostrarFecha() {



  var fecha = new Date().toLocaleString();



  alert("La fecha actual es: " + fecha);



}







function cambiarColorFondo() {



  document.getElementById("seccion2").style.backgroundColor = "lightgreen";



}

function restaurarColorFondo() {



  document.getElementById("seccion2").style.backgroundColor = "silver";



}
