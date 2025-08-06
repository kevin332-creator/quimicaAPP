const HEADERSCATEGORIAS = [
  {
    category: "Metal",
    color: "#310b09",
    subcategorias: [
      { name: "Alcalino", color: "#FF9999" },
      { name: "Alcalinotérreo", color: "#FF6666" },
      { name: "Lantánido", color: "#a65580" },
      { name: "Actínido", color: "#ff3ae1" },
      { name: "Transición", color: "#FFC880" },
      { name: "Bloque p", color: "#80FFFF" }
    ]
  },
  {
    category: "Semimetal",
    color: "#463155",
    subcategorias: [
      { name: "Semimetal", color: "#00709a" }
    ]
  },
  {
    category: "No metal",
    color: "#0b3400",
    subcategorias: [
      { name: "Otros no metale", color: "#A0FFA0" },
      { name: "Gases nobles", color: "#CC99CC" }
    ]
  }
];

class HeaderList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
    .containercategorias {
      position: absolute;
      margin-top: 10px;                    /* Lo ubica en la parte superior del contenedor padre */
      margin-left: 580px;                 /* Punto de inicio al centro horizontal */
      transform: translateX(-50%);
      display: flex;
      gap: 1rem;
      font-weight: 600;
      font-size: 10px;
      padding: 1rem;
      border-radius: 8px;
      z-index: 10;          
    }
    

      .category {
        align-items: center;
        width: 190px;
        display: flex;
        flex-direction: column;
        padding: 0px;
        background-color: rgba(241, 241, 241, 0.658);
        top: 0;  
        border-radius: 10px;
        padding-left: 2px;
        padding-bottom: 2px;
        padding-right: 2px;
      }

      .category-name {
        margin-bottom: 0.4rem;
        font-size: 10px;
        text-transform: uppercase;
        color: #fff;
        width: 100%;
        align-items: center;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .subcategorias {
        display: grid;
        grid-template-columns: repeat(2, minmax(50px, 1fr));
        gap: 0.4rem;
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li {
        border-radius: 4px;
        padding: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        background-color: var(--element-color, #99ddcc);
        box-shadow: 0 0 5px 5px rgba(0 0 0 / 25%) inset;
        overflow: hidden;
        text-decoration: none;
        color: #000;
        position: relative;
        cursor: pointer;
        transition: transform 0.2s ease;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 4px;
        padding-right: 4px;
      }

      li:hover {
        cursor: pointer;
        transform: scale(1.05);
        border-color: #000;
      }

      li.active {
        border: 2px solid black;
        box-shadow: 0 0 5px black;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  renderElements() {
    return HEADERSCATEGORIAS.map((categoria, catIndex) => {
      return /* html */`
        <div class="category">
          <div class="category-name" style="background:${categoria.color};">${categoria.category}</div>
          <ul class="subcategorias">
            ${categoria.subcategorias.map((sub, index) => {
              return `<li data-cat="${catIndex}" data-key="${index}" style="background:${sub.color};">${sub.name}</li>`;
            }).join("")}
          </ul>
        </div>`;
    }).join("");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${HeaderList.styles}</style>
      <div class="containercategorias">
        ${this.renderElements()}
      </div>
    `;
  }
}

customElements.define("header-list", HeaderList);
