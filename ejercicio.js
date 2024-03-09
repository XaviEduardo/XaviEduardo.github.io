function cambiarColor()
{
    variable_album = document.getElementById("album");
    if (variable_album.style.backgroundColor === "transparent" || variable_album.style.backgroundColor === "") {
        variable_album.style.backgroundColor = "gainsboro"; // Cambia al color de fondo establecido
    } else {
        variable_album.style.backgroundColor = "transparent"; // Hace el fondo transparente
    }
}

function cambiarTamano(){
    let clase_imagen = document.getElementsByClassName("imagen")[0];
    clase_imagen.style.height="250px";
    clase_imagen.style.width="auto";

}
