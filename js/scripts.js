//FETCH API

descargarUsuarios(30);

function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    // llamado a Fetch
    fetch(api)
        .then(respuesta => respuesta.json() )
        .then(datos => imprimirHTML(datos.results) );

}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        const li = document.createElement('li');
        const {name:{first}, name:{last}, picture:{medium}, nat} = usuario;
        li.innerHTML = ` 
            Nombre: ${first} ${last}  
            Pais: ${nat}
            imagen: <img src="${medium}">
        
        
        `
        document.querySelector('#app').appendChild(li);
    });
}
