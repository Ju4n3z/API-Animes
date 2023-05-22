class CardResultados extends HTMLElement {
      
      constructor(result, id) {
        super();
        //this.attachShadow({ mode: "open" });
        this.render(result, id);
      }
    
    
      render(result, id){
        this.innerHTML =`
          <img src=${result.picture_url} height="350" width="263" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${result.title_ov}</h5>
            <p class="card-text">${result.synopsis.slice(0, 50) + "..."}</p>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#${id}">Leer más</button>
          </div>
        `;
      }
  }
  
  customElements.define("card-resultados", CardResultados);
  
  export { CardResultados };