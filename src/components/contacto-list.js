import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat';
import axios from 'axios';


/**
 * `contacto-list` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ContactoList extends PolymerElement {
  static get properties() {
    return {
      contacts: {
        type: Array,
        value: function() {
          return [];
        }
      }
    }
  }

  static get template() {
    return html`      
      <style>
        :host {
          margin: 20px 0;
        }
        div {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
      </style>
      <div>
        <template is="dom-repeat" items="[[contacts]]">
          <contacto-card nombre="[[item.name]]" email="[[item.email]]"></contacto-card>
        </template>
      </div>
    `;
  }

  ready() {
    super.ready();
    console.log('aki')
    //https://jsonplaceholder.typicode.com/users
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res);
      if(res.data) {
        this.contacts = res.data;
      }
    })
    .catch((err) => {
      console.log('Error!!!', err);
    });
  }
}

customElements.define('contacto-list', ContactoList);