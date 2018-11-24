import ListService from './list-service.js'

let _listService = new ListService()

function getLists() {
  _listService.getLists(draw)
}

function draw(_lists) {
  let template = `<div>totalLists: ${_lists.length}</div>`
  _lists.forEach(_lists => {
    template += `
    <input checkbox class="box" type="checkbox" ${_lists.completed ? "checked" : ''} onsubmit="app.controllers.listController('${_lists.productName}')" <h5>Check Box If Purchased</h5>
				<p class="boxes">List: ${_lists.productName}</p>
				<button type="button" onclick="app.controllers.listController.delete('${_lists._id}')">Delete</button>
				</div>
    `
  })
  document.getElementById('wish-list').innerHTML = template
}

export default class ListController {
  constructor() {
    _listService.getLists(draw)
    getLists()
  }

  addListFromForm(event) {
    event.preventDefault()
    var form = event.target
    var list = {

      description: form.description.value
    }

    _listService.addList(list, getLists)
  }

  toggleListStatus(listId) {
    _listService.toggleListStatus(listId, getLists)
  }

  delete(id) {
    _listService.delete(id, draw)
  }
}