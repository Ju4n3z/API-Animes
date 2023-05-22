class Modal extends HTMLElement {
      
      constructor(result, id) {
        super();
        //this.attachShadow({ mode: "open" });
        this.render(result, id);
      }
    
    
      render(result, id){
        this.innerHTML =`
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id=${id}>${result.title_ov}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <img src=${result.picture_url} class="card-img-top" height="670">
                <br><br>
                <div>
                    <h4>Descripción</h4>
                    <p>${result.synopsis}</p>
                </div><br>
                <div class="row justify-content-evenly">
                    <div class="col-5 d-block">
                        <h5>Episdodios:</h5>
                        <p class="align-middle">${result.information.episodes}</p>
                    </div>
                    <div class="col-5 d-block">
                        <h5>Estado:</h5>
                        <p class="align-middle">${result.information.status}</p>
                    </div>
                </div><br>
                <div class="row justify-content-evenly">
                    <div class="col-5 d-block">
                        <h5>Generos:</h5>
                        <p class="align-middle">${result.information.genres[0].name}</p>
                        <p class="align-middle">${result.information.genres[1].name}</p>
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