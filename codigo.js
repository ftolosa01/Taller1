//variables
var autor = document.getElementById("autor");
var comentario = document.getElementById("comentario");
var boton = document.getElementById("boton");

var CargarComentario = document.getElementById("CargarComentarios");

const listaComentarios = []; 
var contador = 0;
//eventos

boton.addEventListener("click", function(){
    addArray();
});
function Cargar(){
    CargarComentario.innerHTML = listaComentarios.map(alert => 
    `<div class="alert alert-primary" role="alert">
        ${listaComentarios}
    </div>`).join(``);
    contador = contador + 1;
}
function addArray(){
    listaComentarios.push(`${autor.value}  ${comentario.value}`);
    console.log(listaComentarios);
    Cargar();
}


