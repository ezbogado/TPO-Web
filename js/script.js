function iniciarMap(){
    var coord = {lat:-34.5432202 ,lng: -58.5642953};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

function mostrar(){
    document.getElementById('map-responsive').style.display='block';
}

function ocultar(){
    document.getElementById('map-responsive').style.display='none';
}

/*FORMULARIO DE CONTACTO*/

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('botonformulario', (e) => {
  e.preventDefault();

  // Validar campos requeridos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const province = document.getElementById('province').value;
  const checkboxes = document.querySelectorAll('input[name="option"]:checked');

  // Expresiones regulares para validación
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Validar campos utilizando expresiones regulares
  if (!nameRegex.test(name)) {
    alert('Por favor, ingrese un nombre válido.');
    return;
  }
  
  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }
  
  if (!phoneRegex.test(phone)) {
    alert('Por favor, ingrese un número de teléfono válido.');
    return;
  }
  
  if (province.trim() === '') {
    alert('Por favor, ingrese una provincia.');
    return;
  }
  
  if (checkboxes.length === 0) {
    alert('Por favor, seleccione al menos una opción del checkbox.');
    return;
  }

  // Enviar formulario
  alert('Formulario enviado correctamente.');
  contactForm.reset();
});
