import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `contacto-card` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ContactoCard extends PolymerElement {
  static get properties() {
    return {
      nombre: String,
      email: String
    }
  }

  static get template() {
    return html`      
      <style>
        .card {
          display: inline-block;
          border-radius: 4px;
          background-color: #f0f5ff;
          box-shadow: 2px 2px 6px #ddd;
          padding: 10px;
          margin: 5px;
        }
        p, h3 {
          margin-top: 0;
        }
      </style>
      <div class="card">
            <h3>[[nombre]]</h3>
            <p>[[email]]</p>
      </div>
    `;
  }

}

customElements.define('contacto-card', ContactoCard);