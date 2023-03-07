document.addEventListener('DOMContentLoaded', function() {
  var experienciaDetalles = document.querySelectorAll('.experiencia-detalle');
  for (var i = 0; i < experienciaDetalles.length; i++) {
    experienciaDetalles[i].style.display = 'none';
  }

  var experienciaBotones = document.querySelectorAll('.experiencia-boton');
  for (var i = 0; i < experienciaBotones.length; i++) {
    experienciaBotones[i].addEventListener('click', function() {
      var experienciaDetalle = this.nextElementSibling;
      if (experienciaDetalle.style.display === 'none') {
        experienciaDetalle.style.display = 'block';
        this.textContent = 'Click para menos información';
      } else {
        experienciaDetalle.style.display = 'none';
        this.textContent = 'Click para más información';
      }
    });
  }
});
