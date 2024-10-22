fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(data => {
  let lista = document.getElementById('lista');
   //En esta variable se guarda el contenido HTML
  let contenidoHTML = '';

  // Se recorre el arreglo de objetos
    data.forEach(data => {
    contenidoHTML += `
      <p><strong>ID:</strong> ${data.id}</p>
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Body:</strong> ${data.body}</p>
      <hr>

    `;
  });

  // Se inserta el contenido en la lista HTML
  lista.innerHTML = contenidoHTML;
  })
  //Atrapa el Error si existe uno
  .catch(error => {
  console.error("Error", error);
  });

