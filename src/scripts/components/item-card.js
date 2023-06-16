class ItemCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="content">
        <section class="content">
          <div class="latest">
            <h1>Explore Restaurant</h1>
            <hr>
            <div class="list" id="data"></div>
          </div>
        </section>
      </main>
        `;
  }
}

customElements.define("item-card", ItemCard);
