import ListController from "./components/list-controller.js";

console.log("Neat this is my app")

class App {
  constructor() {
    this.controllers = {
      listController: new ListController()
    }
  }
}

// @ts-ignore
window.app = new App()