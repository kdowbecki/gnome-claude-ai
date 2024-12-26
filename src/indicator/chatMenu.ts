// TODO Understand difference between importing from js file path and from @module expression
import Indicator from "./indicator.js";

export default class ChatMenu {
  private _indicator: Indicator;

  constructor(indicator: Indicator) {
    this._indicator = indicator;
  }

  destroy() {
    
  }
}
