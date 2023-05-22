class Modal extends HTMLElement {
      
      constructor(result, genero) {
        super();
        //this.attachShadow({ mode: "open" });
        this.render(result, genero);
      }
    
    
      render(result, genero){
        this.innerHTML =`
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${result.title_ov}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <img src=${result.picture_url} class="card-img-top" height="670">
                <br><br>
                <div>
                    <h4>Descripción</h4>
                    <p>${result.synopsis}</p>
                </div>
                <div><br>
                    <h4>Autor</h4>
                    <p>${result.information.authors[0].name}</p>
                </div><br>
                <div class="row justify-content-evenly">
                    <div class="col-3 d-block">
                        <h5>Volumenes:</h5>
                        <p class="align-middle">${result.information.volumes}</p>
                    </div>
                    <div class="col-3 d-block">
                        <h5>Capitulos:</h5>
                        <p class="align-middle">${result.information.chapters}</p>
                    </div>
                    <div class="col-3 d-block">
                        <h5>Estado:</h5>
                        <p class="align-middle">${result.information.status}</p>
                    </div>
                </div><br>
                <div class="row justify-content-evenly">
                    <div class="col-5 d-block">
                        <h5>Genero:</h5>
                        <p class="align-middle">${genero}</p>
                    </div>
                    <div class="col-5 d-block">
                        <h5>Tipo:</h5>
                        <p class="align-middle">${result.information.demographic[0].name}</p>
                    </div>
                </div><br>
                <div>
                    <h4>Estadisticas</h4>
                    <div class="row justify-content-evenly">
                        <div class="col-5 d-block">
                            <h5>Posicionado:</h5>
                            <p class="align-middle">${result.statistics.ranked}</p>
                        </div>
                        <div class="col-5 d-block">
                            <h5>Popularidad:</h5>
                            <p class="align-middle">${result.statistics.popularity}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        </div>
        `;
      }
  }
  
  customElements.define("modal-carta", Modal);
  
  export { Modal };