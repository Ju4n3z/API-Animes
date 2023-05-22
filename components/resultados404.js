class CardResultados404 extends HTMLElement {

    titulo;
    url;
    descripcion;
      
      constructor(titulo, url, descripcion) {
        super();
        //this.attachShadow({ mode: "open" });
        this.titulo = titulo;
        this.url = url;
        this.descripcion = descripcion;
        this.render(titulo, url, descripcion);
      }
    
    
      render(titulo, url, descripcion){
        this.innerHTML =`
          <img src=${url} height="350" width="263" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descripcion}</p>
          </div>
        `;
      }
  }
  
  customElements.define("card-resultados-no", CardResultados404);
  
  export { CardResultados404 };