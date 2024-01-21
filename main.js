// Función para cargar el contenido del archivo HTML en el iframe
function cargarContenido(ruta) {
  // Obtener el contenedor y el iframe
  let contenedor = document.getElementById('game-loaded');
  let iframe = document.getElementById('contenidoIframe');

  // Establecer la ruta del archivo HTML en el src del iframe
  iframe.src = ruta;

  // Mostrar el contenedor
  contenedor.style.display = 'block';
}

// Función para limpiar el contenido del iframe y ocultar el contenedor
function limpiarContenido() {
  // Obtener el contenedor y el iframe
  let contenedor = document.getElementById('game-loaded');
  let iframe = document.getElementById('contenidoIframe');

  // Limpiar el src del iframe
  iframe.src = 'about:blank';

  // Ocultar el contenedor
  contenedor.style.display = 'none';
}

// Agregar un manejador de eventos para el clic en el botón
document.getElementById('ingresarDatosBtn').addEventListener('click', function() {
  // Llamada a la función que contiene el código de players.js
  ingresarDatos();
});
