class CardTop extends HTMLElement {

  titulo;
  url;
    
    constructor(titulo, url) {
      super();
      //this.attachShadow({ mode: "open" });
      this.titulo = titulo;
      this.url = url;
      this.render(titulo, url);
    }
  
  
    render(titulo, url){
        this.innerHTML =`
          <img src="${url}" alt="">
          <p class="align-middle">${titulo}</p>
      `;
    }
}

customElements.define("card-top", CardTop);

export { CardTop };