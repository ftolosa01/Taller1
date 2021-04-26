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
}
function addArray(){
    if(listaComentarios.length >= 4){
        reemplazarPrimerElementoarray();
    }else{
    listaComentarios.push(`${autor.value}  ${comentario.value}`);
    }
    Cargar();
}

function reemplazarPrimerElementoarray(){
    listaComentarios.splice(`${contador}`,1,`${autor.value}  ${comentario.value}`)
    contador = contador + 1;
}


