document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    const fullMessage = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        message: fullMessage,
      }),
    })
      .then((response) => {
        return response.json().then((data) => {
          if (response.ok) {
            console.log("Email enviado exitosamente");
            form.reset(); // Limpia el formulario
          } else {
            console.error("Error al enviar el email:", data);
          }
        });
      })
      .catch((error) => {
        console.error("Error en la petición:", error);
      });
  });
});
