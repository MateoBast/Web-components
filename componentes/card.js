function card(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <img class="card__imagen"src="imagenes/0af8e23cd8af9f2bc81da5a4047ecdc800007d18 (1).png" alt="">
        <div class="card__contenedor-titulo">
        <h2 class="card__titulo">Desarrollo de paginas web</h2>
        </div>
        <div class="card__contenedor-texto">
        <p class="card__texto">Desarrollo de páginas web totalmente responsivas y con enfoque mobile-first. Utilizo tecnologías como HTML, CSS y JavaScript para crear sitios atractivos y funcionales.
        </p>
        </div>

`;
  element.appendChild(componentEl);
  componentEl.classList.add("card");
}
