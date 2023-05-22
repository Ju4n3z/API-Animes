class CardTop extends HTMLElement {
    
    constructor(titulo, url) {
      super();
      //this.attachShadow({ mode: "open" });
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