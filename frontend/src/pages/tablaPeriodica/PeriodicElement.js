import HTMLData from "./HTMLData.js";

class PeriodicElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

 static get styles() {
  return /* css */`
    .element {
      border: 1px solid #111;
      border-radius: 4px;
      padding: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
       background-color: var(--element-color, #99ddcc);
      box-shadow: 0 0 5px 5px rgba(0 0 0 / 25%) inset;
      width: clamp(50px, 6vw, 80px);
      height: clamp(50px, 6vw, 80px);
      overflow: hidden;
      text-decoration: none;
      color: #000;
      position: relative;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .element span {
      font-family: var(--code-font, monospace);
      font-weight: 500;
      font-size: 0.8rem;
      color: #333;
    }

    .element .num {
      background: rgb(0 0 0 / 25%);
      padding: 0 1.3rem 1rem;
      clip-path: polygon(0 0, 50% 60%, 100% 0);
      position: absolute;
      top: 0;
    }

    .element .num span {
      position: relative;
      top: -2px;
    }

    .element p {
      margin: 0;
      margin-top: 0.5rem;
      font-size: 1.75rem;
      font-weight: 800;
    }

    .element .name {
      display: inline-block;
      transform: translateY(-4px);
    }

    .element:hover {
      transform: scale(1.5); /* un poco más pequeño para que no se salga */
      transition: transform 0.2s, width 0.2s;
      z-index: 5;
      box-shadow: 0 0 6px 4px #0008 inset;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
       background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .modal-content {
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      max-width: 400px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      position: relative;
      font-size: 0.9rem;
    }

    .modal-content h2 {
      margin-top: 0;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .modal-content button.close-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
    }

    .modal-content ul {
      padding-left: 1.2rem;
    }
  `;
}

  connectedCallback() {
    this.num = this.getAttribute("num") ?? "0";
    this.symbol = this.getAttribute("symbol") ?? "0";
    this.name = this.getAttribute("name") ?? "0";

    this.atomicNumber = this.getAttribute("atomicNumber") ?? "";
    this.atomicWeight = this.getAttribute("atomicWeight") ?? "";
    this.category = this.getAttribute("category") ?? "";
    this.group = this.getAttribute("group") ?? "";
    this.period = this.getAttribute("period") ?? "";
    this.block = this.getAttribute("block") ?? "";
    this.state = this.getAttribute("state") ?? "";
    this.electronConfig = this.getAttribute("electronConfig") ?? "";
    this.electronegativity = this.getAttribute("electronegativity") ?? "";
    this.discoveryYear = this.getAttribute("discoveryYear") ?? "";
    this.color = this.getAttribute("color") ?? "";

    this.description = this.getAttribute("description") ?? "";
    this.uses = this.getAttribute("uses")?.split('|') ?? [];
    this.facts = this.getAttribute("facts")?.split('|') ?? [];

    this.render();
  }

  

  openModal() {
    this.dispatchEvent(new CustomEvent('open-modal', {
      detail: {
        symbol: this.symbol,
        name: this.name,
        num: this.num,
        atomicNumber: this.atomicNumber,
        atomicWeight: this.atomicWeight,
        category: this.category,
        group: this.group,
        period: this.period,
        block: this.block,
        state: this.state,
        electronConfig: this.electronConfig,
        electronegativity: this.electronegativity,
        discoveryYear: this.discoveryYear,
        color: this.color,
        description: this.description,
        uses: this.uses,
        facts: this.facts
      },
      bubbles: true,
      composed: true
    }));
  }
  

  render() {
    this.shadowRoot.innerHTML = /* html */`
      <style>${PeriodicElement.styles}</style>
      <div class="element">
        <span class="num"><span style="color: white;">${this.atomicNumber}</span></span>
        <p>${this.symbol}</p>
        <span class="name" style="color: #001928;">${this.name}</span>
      </div>
    `;
    this.shadowRoot.querySelector('.element').addEventListener('click', () => this.openModal());

  }
}

customElements.define("periodic-element", PeriodicElement);