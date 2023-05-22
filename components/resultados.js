class CardResultados extends HTMLElement {

    titulo;
    url;
    descripcion;
    id;
      
      constructor(titulo, url, descripcion, id) {
        super();
        //this.attachShadow({ mode: "open" });
        this.titulo = titulo;
        this.url = url;
        this.descripcion = descripcion;
        this.id = id;
        this.render(titulo, url, descripcion, id);
      }
    
    
      render(titulo, url, descripcion, id){
        this.innerHTML =`
          <img src=${url} height="350" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descripcion}</p>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#${id}">Leer más</button>
          </div>
        `;
      }
  }
  
  customElements.define("card-resultados", CardResultados);
  
  export { CardResultados };