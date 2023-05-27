const formulario = document.getElementById("formulario");
const apellido = document.getElementById("apellido");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const val_nom_ape = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const val_email = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!val_nom_ape.test(apellido.value) || !apellido.value.trim()) {
    alert("Formato no válido campo Apellido, solo letras");
    apellido.focus();
    return 0;
  }
  if (!val_nom_ape.test(nombre.value) || !nombre.value.trim()) {
    alert("Formato no válido campo Nombre, solo letras");
    nombre.focus();
    return 0;
  }

  if (!val_email.test(email.value)) {
    alert("Formato no válido campo Email");
    apellido.focus();
    return 0;
  }

  if (asunto.value.length < 5 || !asunto.value.trim()) {
    alert("Por favor, escriba un Asunto de al menos 5 caracteres");
    asunto.focus();
    return 0;
  }

  if (mensaje.value.length < 10 || !mensaje.value.trim()) {
    alert("Por favor, escriba un Mensaje de al menos 10 caracteres");
    mensaje.focus();
    return 0;
  }

  // Datos del formulario
  const formData = {
    Apellido: apellido.value,
    Nombre: nombre.value,
    Email: email.value,
    Asunto: asunto.value,
    Mensaje: mensaje.value
  };

  fetch("https://sheetdb.io/api/v1/yjx4b6o4pxlt0", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer yjx4b6o4pxlt0" //clave de API
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      MensajeEnviado.textContent = "Gracias! Su mensaje ha sido envíado con éxito."
      msg_final = document.getElementById("MensajeEnviado");
      msg_final.style.visibility = "visible";
    })
    .catch(error => {
      console.error(error); 
      alert("Ha ocurrido un error al enviar el formulario. Por favor, inténtalo nuevamente.");
    });
    
    document.getElementById("formulario").reset();
});
