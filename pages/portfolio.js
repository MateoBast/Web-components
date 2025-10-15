function main() {
  const HeaderContenedor = document.querySelector(".encabezado");
  header(HeaderContenedor);
  const headerMobileContenedor = document.querySelector(".encabezado-mobile");
  headerMobile(headerMobileContenedor);
  const otroContenedor = document.querySelector(".background-contenedor");
  backGround(otroContenedor);
  const contenedorFootermobile = document.querySelector(
    ".footer-contenedor__mobile"
  );
  footerMobile(contenedorFootermobile);
  const pieContenedor = document.querySelector(".pie");
  footer(pieContenedor);
}
main();
