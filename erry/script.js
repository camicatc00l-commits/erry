/* Carrusel */
const contenedor = document.querySelector('.contenedor');

document.querySelector('.next').onclick = () => {
    contenedor.scrollLeft += 600;
};

document.querySelector('.prev').onclick = () => {
    contenedor.scrollLeft -= 600;
};

/* Comentarios */

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

function Comentario()
{
    let nombre = document.querySelector(".nombre").value.trim();
    let correo = document.querySelector(".correo").value.trim();
    let mensaje = document.querySelector(".mensaje").value.trim();

    if(nombre === "" || correo === "" || mensaje === "")
    {
        alert("Todos los campos son obligatorios");
        return;
    }

    let comentario = {
        id: Date.now(),
        nombre,
        correo,
        mensaje
    };

    comentarios.push(comentario);

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    Limpiar();
    MostrarComentarios()

    
}

function AlternarComentarios()
{
    let contenedor = document.getElementById("comentarios");
    let boton = document.querySelector("#btnComentarios h3");

    if(getComputedStyle(contenedor).display === "none")
    {
        contenedor.style.display = "block";
        contenedor.innerHTML = "";

        comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

        comentarios.forEach((comentario) =>
        {
            contenedor.innerHTML += `
                <div class="comentario">
                    <div class="comentarios">
                        <h3 h2-fresa>${comentario.nombre}</h3>
                        <p>${comentario.mensaje}</p>
                    </div>
                </div>
            `;
        });

        boton.textContent = "Ocultar Comentarios";
    }
    else
    {
        contenedor.style.display = "none";
        boton.textContent = "Cargar Comentarios";
    }
}

function Limpiar()
{
    document.querySelector(".nombre").value = "";
    document.querySelector(".correo").value = "";
    document.querySelector(".mensaje").value = "";
}



