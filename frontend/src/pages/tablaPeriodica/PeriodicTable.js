import "./PeriodicElement.js";
import HTMLData from "./HTMLData.js";



class PeriodicTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host {
        --element-size: 65px;
        --real-size: calc(var(--element-size) + 10px);
        display: grid;
        place-items: center;
      }
      .containertablas{
        background-color: #ffffffff;
        .containertablas {

        

      }

      .elements {
        display: grid;
        grid-template-columns: repeat(18, var(--real-size));
        grid-template-rows: repeat(7, var(--real-size));
        grid-auto-flow: column;
        margin-bottom: 20px;
        gap: 1px;

        :nth-child(4n + 14):not(:nth-child(4n + 54)) {
          grid-row-start: 4;
        }

        :nth-child(6n + 54):not(:nth-child(6n + 84)),
        :nth-child(8) {
          grid-row-start: 2;
        }
        
      }

      .lantanids {
        justify-content: center;
        align-items: center;
        display: flex;
        gap: var(--real-size);
      }

      .semantics {
        display: grid;
        grid-template-columns: repeat(15, var(--real-size));
        grid-template-rows: repeat(2, var(--real-size));
        gap: 1px;
      }

      .deprecated {
        display: grid;
        grid-template-columns: repeat(4, var(--real-size));
        grid-template-rows: repeat(2, var(--real-size));
        gap: 1px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  renderElements() {
    const offset = 1;
    const html = HTMLData.elements.map((el, index) => `
      <periodic-element 
        atomicNumber="${el.atomicNumber ?? index + offset}" 
        symbol="${el.symbol}" 
        name="${el.name}" 
        description="${el.description ?? ''}" 
        uses="${el.uses?.join('|') ?? ''}" 
        facts="${el.facts?.join('|') ?? ''}" 
        atomicWeight="${el.atomicWeight ?? ''}"
        category="${el.category ?? ''}"
        group="${el.group ?? ''}"
        period="${el.period ?? ''}"
        block="${el.block ?? ''}"
        state="${el.state ?? ''}"
        electronConfig="${el.electronConfig ?? ''}"
        electronegativity="${el.electronegativity ?? ''}"
        discoveryYear="${el.discoveryYear ?? ''}"
        color="${el.color ?? ''}"
        style="--element-color:${el.color ?? '#ccc'}"
      ></periodic-element>
    `);
    return html.join("");
  }




  renderSemantics() {
    const offset = HTMLData.elements.length + 1;
    const html = HTMLData.semantics.map((el, index) => `
    <periodic-element 
      atomicNumber="${el.atomicNumber ?? index + offset}" 
      symbol="${el.symbol}" 
      name="${el.name}" 
      description="${el.description ?? ''}" 
      uses="${el.uses?.join('|') ?? ''}" 
      facts="${el.facts?.join('|') ?? ''}" 
      atomicWeight="${el.atomicWeight ?? ''}"
      category="${el.category ?? ''}"
      group="${el.group ?? ''}"
      period="${el.period ?? ''}"
      block="${el.block ?? ''}"
      state="${el.state ?? ''}"
      electronConfig="${el.electronConfig ?? ''}"
      electronegativity="${el.electronegativity ?? ''}"
      discoveryYear="${el.discoveryYear ?? ''}"
      color="${el.color ?? ''}"
      style="--element-color:${el.color ?? '#ccc'}"
    ></periodic-element>
    `);
    return html.join("");
  }


  renderDeprecated() {
    const offset = HTMLData.elements.length + HTMLData.semantics.length + 1;
    const html = HTMLData.deprecated.map((el, index) => `
    <periodic-element 
      atomicNumber="${el.atomicNumber ?? index + offset}" 
      symbol="${el.symbol}" 
      name="${el.name}" 
      description="${el.description ?? ''}" 
      uses="${el.uses?.join('|') ?? ''}" 
      facts="${el.facts?.join('|') ?? ''}" 
      atomicWeight="${el.atomicWeight ?? ''}"
      category="${el.category ?? ''}"
      group="${el.group ?? ''}"
      period="${el.period ?? ''}"
      block="${el.block ?? ''}"
      state="${el.state ?? ''}"
      electronConfig="${el.electronConfig ?? ''}"
      electronegativity="${el.electronegativity ?? ''}"
      discoveryYear="${el.discoveryYear ?? ''}"
      color="${el.color ?? ''}"
      style="--element-color:${el.color ?? '#ccc'}"
    ></periodic-element>
    `);
    return html.join("");
  }


  render() {
    this.shadowRoot.innerHTML = `
    <style>${PeriodicTable.styles}</style>
    <div class="containertablas text-center " >
      <div class="elements">
        ${this.renderElements()}
      </div>
      <div class="lantanids ">
        <div class="semantics">
          ${this.renderSemantics()}
        </div>
      </div>
    </div>`;
  }
}

customElements.define("periodic-table", PeriodicTable);

