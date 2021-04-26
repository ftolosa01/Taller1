//variables
var autor = document.getElementById("autor");
var comentario = document.getElementById("comentario");
var boton = document.getElementById("boton");

var CargarComentario = document.getElementById("CargarComentarios");

const listaComentarios = []; 
var contador = 0;
var fecha = new Date(); 
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
    if(autor.value.length <= 2){
        alert("Minimo de caracteres es 3");
        return false;
    }else{
        if( comentario.value.length == 0){
            alert("Minimo de caracteres es 1");
            return false;
        }else{
            if(comentario.value.length <= 200){
                if(listaComentarios.length >= 4){
                    reemplazarPrimerElementoarray();
                }else{
                listaComentarios.push(`${autor.value}  ${comentario.value}  ${fecha.toLocaleTimeString()} ${fecha.toLocaleDateString()} `);
                }
                Cargar();
            }else{
                alert("Maximo de caracteres es 200");
                return false;
            }
        }
    }    
}

function reemplazarPrimerElementoarray(){
    listaComentarios.splice(`${contador}`,1,`${autor.value}  ${comentario.value}  ${fecha.toLocaleTimeString()} ${fecha.toLocaleDateString()} `)
    contador = contador + 1;
}



