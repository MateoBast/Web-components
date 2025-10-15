function footer(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <img src="imagenes/logo.png" alt="">
        <div class="pie__contendor-links">

            <a class="pie__links"href="index.html"><i class="fas fa-home"></i> Home</a>
            <a class="pie__links" href="servicios.html"><i class="fas fa-user"></i> Servicios</a>
            <a class="pie__links" href="contacto.html"><i class="fas fa-phone"></i> Contacto</a>
        </div>
        <div class="pie__contenedor-social">
            <a class="pie__social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-linkedin loguito"></i>
           </a>
           <a class="pie__social" href="https://github.com/MateoBast" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-github loguito"></i>
         </a>
         <a class="pie__social" href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-twitter loguito"></i>
         </a>
        </div>
        <div class="pie__contenedor-texto">
            <a class="pie__texto" href="https://apx.school">https://apx.school</a>
        </div>    
`;
  element.appendChild(componentEl);
  componentEl.classList.add("pie__contenedor");
}
