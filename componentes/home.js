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

      const titulo = data.items[8].fields.titulo;

      divContenido.innerHTML = `
        <p class="mi-clase">
          <span class="linea-blanca">${titulo}</span><br>
          <span class="linea-azul">Soy</span><br>
          <span class="linea-azul">Mateo</span>
        </p>
      `;

      const contenedorCohete = document.getElementById("contenedor-cohete");

      // Obtener el ID de la imagen
      const imageId = data.items[8].fields.imagen.sys.id;

      // Buscar la imagen en includes
      const imageAsset = data.includes.Asset.find(
        (asset) => asset.sys.id === imageId
      );
      const imageUrl = imageAsset.fields.file.url;

      const foto = document.createElement("img");
      foto.src = imageUrl;
      foto.alt = "Imagen del cohete";
      foto.className = "mi-clase-imagen"; // Acá le asignás la clase

      contenedorCohete.appendChild(foto);
      contenedorCohete.appendChild(foto);

      const contenedorTitulo = document.querySelector(".contenedor-mi-titulo"); // Asegúrate de usar el selector correcto
      const mititulo = data.items[9].fields.titulo; // Obtener el título

      const h2 = document.createElement("h2"); // Crear el elemento h2
      h2.textContent = mititulo; // Asignar el texto al h2
      h2.className = "mi-titulo"; // Asignar la clase al h2

      contenedorTitulo.appendChild(h2);

      const contenedorDescripcion = document.querySelector(
        ".contenedor-descripcion"
      );
      const Midescripcion =
        data.items[9].fields.descripcion.content[0].content[0].value;
      const p = document.createElement("p");
      p.textContent = Midescripcion;
      p.className = "mi-descripcion";
      contenedorDescripcion.appendChild(p);

      // Obtener el ID de la imagen del segundo item
      const idImagenSegundoItem = data.items[9].fields.imagen.sys.id;

      // Buscar la imagen en includes
      const assetImagen = data.includes.Asset.find(
        (asset) => asset.sys.id === idImagenSegundoItem
      );

      if (assetImagen) {
        // Obtener la URL de la imagen
        const urlImagen = assetImagen.fields.file.url;

        // Crear el elemento img
        const imagenElemento = document.createElement("img");
        imagenElemento.src = urlImagen;
        imagenElemento.alt = "Descripción de la imagen";
        imagenElemento.className = "mi-imagen";

        // Agregar la imagen a un contenedor
        const contenedorImg = document.querySelector(".contenedor-mi-imagen");
        contenedorImg.appendChild(imagenElemento);
      } else {
        console.error("No se encontró la imagen para el segundo item");
      }
    });
});
