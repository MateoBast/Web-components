document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://cdn.contentful.com/spaces/cf14y3n7drdh/entries?access_token=aut1ti65hK40_FpzNrbPscWNRaPv3DcLNAFzWvKXEG4"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const divContenido = document.getElementById("contenido");

      const titulo = data.items[6].fields.titulo;

      divContenido.innerHTML = `
        <p class="mi-clase">
          <span class="linea-blanca">${titulo}</span><br>
          <span class="linea-azul">servicios</span><br>
        </p>
      `;

      const contenedorSombra = document.querySelector(".contenedor-sombra");

      const imageId2 = data.items[7].fields.imagen.sys.id;

      // Buscar la imagen en includes
      const imageAsset2 = data.includes.Asset.find(
        (asset) => asset.sys.id === imageId2
      );
      const imageUrl2 = imageAsset2.fields.file.url;

      const foto2 = document.createElement("img");
      foto2.src = imageUrl2;
      foto2.alt = "Imagen del maletin";
      foto2.className = "mi-clase-sombra"; // Acá le asignás la clase

      contenedorSombra.appendChild(foto2);
      contenedorSombra.appendChild(foto2);

      const CardTitulo0 = document.querySelector(".card__titulo0");
      CardTitulo0.textContent = data.items[0].fields.titulo;
      const cardDescrip0 = document.querySelector(".card__texto0");
      cardDescrip0.textContent =
        data.items[0].fields.descripcion.content[0].content[0].value;
      const CardTitulo1 = document.querySelector(".card__titulo1");
      CardTitulo1.textContent = data.items[1].fields.titulo;
      const cardDescrip1 = document.querySelector(".card__texto1");
      cardDescrip1.textContent =
        data.items[1].fields.descripcion.content[0].content[0].value;
      const CardTitulo2 = document.querySelector(".card__titulo2");
      CardTitulo2.textContent = data.items[2].fields.titulo;
      const cardDescrip2 = document.querySelector(".card__texto2");
      cardDescrip2.textContent =
        data.items[2].fields.descripcion.content[0].content[0].value;
    });
});
