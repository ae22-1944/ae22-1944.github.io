// Activar/Desactivar Modo Oscuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Efecto hover con jQuery
$(document).ready(function () {
  $('.list-group-item').hover(
    function () {
      $(this).css('background-color', '#e9ecef');
    },
    function () {
      $(this).css('background-color', '');
    },
  );
});

// Alertas y Modales
function showAlert() {
  alert('¡Este es un mensaje de alerta!');
}

function showModal() {
  $('#exampleModal').modal('show');
}
