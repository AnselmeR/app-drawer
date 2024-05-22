const css = `
@font-face {
  font-family: 'Poppins';
  src: url('fonts/Poppins/Poppins-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

/* Apply the Poppins font to the component */
#drawer, .menu-item, .menu-item .text {
  font-family: 'Poppins', sans-serif;
}

/* Container for the drawer */
#drawer {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 10px; /* Space between grid items */
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Individual icon/menu item */
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5px 5px 5px;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.menu-item.multiorder {
  border-color: #0691f9;
  &:hover {
    border-color: #0691f9;
    .icon-multiorder { background-image: url('images/blue_ALLinONE MultiOrder.png'); }
  }
}

.menu-item.ccs {
  border-color: #9379ff;
  &:hover {
    border-color: #9379ff;
    .icon-ccs { background-image: url('images/purple_ALLinONE CCS.png'); }
  }
}

/* Hover state for menu items */
.menu-item:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Icon within menu item */
.menu-item .icon {
  width: 64px; /* Adjust width as needed */
  height: 64px; /* Adjust height as needed */
  // margin-bottom: 10px;
  background-size: contain;
  background-repeat: no-repeat;
}

/* Specific icon styles */
.icon-multiorder { background-image: url('images/Black_ALLinONE MultiOrder.png'); }
.icon-ccs { background-image: url('images/Black_ALLinONE CCS.png'); }
.icon-reporting { background-image: url('images/Black_ALLinONE Business Intelligence.png'); }
.icon-cms { background-image: url('images/Black_cloud hosted.png'); }
.icon-uc { background-image: url('images/Black_deployment. database.png'); }
.icon-myaccount { background-image: url('images/Black_ALLinONE MultiOrder.png'); }
.icon-knowledge-base { background-image: url('images/Black_knowledgeable, brain, information.png'); }
.icon-ei { background-image: url('images/Black_agility, modular, bespoke.png'); }
.icon-billing { background-image: url('images/Black_ALLinONE eWarehouse.png'); }

// .icon-multiorder:hover { background-image: url('images/blue_ALLinONE MultiOrder.png'); }
// .icon-ccs { background-image: url('images/Black_ALLinONE CCS.png'); }
// .icon-reporting { background-image: url('images/Black_ALLinONE Business Intelligence.png'); }
// .icon-cms { background-image: url('images/Black_cloud hosted.png'); }
// .icon-uc { background-image: url('images/Black_deployment. database.png'); }
// .icon-myaccount { background-image: url('images/Black_ALLinONE MultiOrder.png'); }
// .icon-knowledge-base { background-image: url('images/Black_knowledgeable, brain, information.png'); }
// .icon-ei { background-image: url('images/Black_agility, modular, bespoke.png'); }
// .icon-billing { background-image: url('images/Black_ALLinONE eWarehouse.png'); }

/* Text within menu item */
.menu-item .text {
  font-size: 12px;
  color: #333;
  text-align: center;
}

.menu-item .text-knowledge-base {
    font-size: 9px;
}
`;

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
        style.textContent = css;

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
