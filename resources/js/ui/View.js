/* eslint-env browser */

import Config from "../utils/Config.js";
import Observable from "../utils/Observable.js";

class View extends Observable {

    constructor() {
      super();
      this.el = undefined;
    }
  
    setElement(el) {
      this.el = el;
    }
  
    show(el) {
      if (el) {
        el.classList.remove(Config.CSS_HIDDEN_CLASS_NAME);
      }
    }
  
    hide(el) {
      if (el) {
        el.classList.add(Config.CSS_HIDDEN_CLASS_NAME);
      }
    }
}

export default View;