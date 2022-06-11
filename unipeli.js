const conteiner = document.querySelector(".contenedor");

let para = new URLSearchParams(window.location.search);
console.log(para);
const id_peli = para.get("id");
console.log(id_peli);

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/tv/${id_peli}?api_key=192e0b9821564f26f52949758ea3c473&language=es`
    );

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      let peliculas = "";

      peliculas += `
					<div class="pelicula">
            <h1>${datos.name}</h1>
					  <a href=""> 
            	<img class="poster" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}"  >
            </a>
          <p>${datos.overview}</p>
					</div>
				`;

      conteiner.innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
