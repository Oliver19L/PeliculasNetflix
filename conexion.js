const boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
  cargarPeliculas();
});

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=1`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula">
					  <a href="#"></a>	<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });
      document.getElementById("contenedor").innerHTML = peliculas;
      document.getElementById("contenedorsecundario").innerHTML = peliculas;
      document.getElementById("contenedortercero").innerHTML = peliculas;
      document.getElementById("contenedorcuarto").innerHTML = peliculas;
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

const cargarPeliSegundas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=2`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula">
					  <a href="#"></a>	<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });

      document.getElementById("contenedorsecundario").innerHTML = peliculas;
      document.getElementById("contenedortercero").innerHTML = peliculas;
      document.getElementById("contenedorcuarto").innerHTML = peliculas;
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
cargarPeliSegundas();

const cargarPeliTerceras = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=3`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula">
					  <a href="#"></a>	<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });
      document.getElementById("contenedortercero").innerHTML = peliculas;
      document.getElementById("contenedorcuarto").innerHTML = peliculas;
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
cargarPeliTerceras();

const cargarPeliCuartas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es&page=4`
    );

    console.log(respuesta);

    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
					<div class="pelicula" >
					  <a href="#"><img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
					</div>
				`;
      });

      document.getElementById("contenedorcuarto").innerHTML = peliculas;
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
cargarPeliCuartas();
