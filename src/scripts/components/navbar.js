class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#content" class="skip-link">Skip to content ?</a>
        
        <nav class="nav">
        <a class="logo" href="">NRT Restaurant Apps</a>
        <ul class="navlist">
          <li class="navitems"><a href="">Home</a></li>
          <li class="navitems"><a href="#">Favorite</a></li>
          <li class="navitems"><a target="_blank" href="https://nuranto.my.id/profile">About Us</a></li>
        </ul>
      </nav>

        <div class="menumobile">
          <div class="iconmenu" id="menu" aria-label="navigation-menu"><a href="#">&#9776;</a></div>
          <div class="logomob">NRT Restaurant Apps</div>
          <div class="logomob">&nbsp;</div>
        </div>


        <nav id="drawer" class="navigationmobile">
          <ul class="navlistmob">
            <li class="navitemsmobile"><a href="">Home</a></li>
            <li class="navitemsmobile"><a href="#">Favorite</a></li>
            <li class="navitemsmobile"><a target="_blank" href="https://nuranto.my.id/profile">About Us</a></li>
          </ul>
        </nav>
        
       
          `;
  }
}

customElements.define("navigation-bar", NavigationBar);
