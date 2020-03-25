import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
// import '@polymer/iron-icon/iron-icon.js';

/**
 * `poly-element`
 * polyelement with paper button
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolyElement extends PolymerElement {
  static get template() {
    return html`
    


      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'poly-element',
      },
    };
  }
}

window.customElements.define('poly-element', PolyElement);
