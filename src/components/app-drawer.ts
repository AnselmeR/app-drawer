import css from "../styles/app-drawer.css" ;

class AppDrawer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const style = document.createElement('style');
        console.log(css)
        style.textContent = css.toString();

        const template = `
          <div id="drawer">
            <div class="menu-item multiorder">
              <div class="icon icon-multiorder"></div>
              <span class="text">MultiOrder</span>
            </div>
            <div class="menu-item ccs">
              <div class="icon icon-ccs"></div>
              <span class="text">CCS</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-reporting"></div>
              <span class="text">Reporting</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-cms"></div>
              <span class="text">CMS</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-uc"></div>
              <span class="text">UC</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-myaccount"></div>
              <span class="text">MyAccount</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-knowledge-base"></div>
              <span class="text text-knowledge-base">Knowledge Base</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-ei"></div>
              <span class="text">EI</span>
            </div>
            <div class="menu-item">
              <div class="icon icon-billing"></div>
              <span class="text">Billing</span>
            </div>
          </div>
        `;

        this.shadowRoot!.innerHTML = template;
        this.shadowRoot!.prepend(style); // Ensure styles are applied

        // Handle menu item clicks if needed
        this.shadowRoot!.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                // Implement your click handling logic here
                console.log((item.querySelector('.text') as HTMLElement).textContent + ' clicked');
            });
        });
    }
}

customElements.define('app-drawer', AppDrawer);
