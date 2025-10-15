function footerMobile(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <img src="imagenes/logo.png" alt="" class="pie-mobile__logo">
             <a class="pie-mobile__links"href="index.html"><i class="fas fa-home"></i> Home</a>
            <a class="pie-mobile__links" href="servicios.html"><i class="fas fa-user"></i> Servicios</a>
            <a class="pie-mobile__links" href="contacto.html"><i class="fas fa-phone"></i> Contacto</a>
        <div class="pie-mobile__contenedor-social">
            <a class="pie-mobile__social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-linkedin loguito"></i>
           </a>
           <a class="pie-mobile__social" href="https://github.com/MateoBast" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-github loguito"></i>
         </a>
         <a class="pie-mobile__social" href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-twitter loguito"></i>
         </a>
        </div>
        <div class="pie-mobile__contenedor-texto">
            <a class="pie__texto" href="https://apx.school"> ©2022 - https://apx.school</a>
        </div>    
`;
  element.appendChild(componentEl);
  componentEl.classList.add("pie-mobile__contenedor");
}
