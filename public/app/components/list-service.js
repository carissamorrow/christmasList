// @ts-ignore
let api = axios.create({
  baseURL: "/api/lists"
})

let _lists = []

export default class ListService {
  static addList(_lists) {
  }

  getLists(draw) {
    api.get('')
      .then((res) => {
        _lists = res.data
        draw(res.data)
      })
  }

  addList(list, getLists) {
    api.post('', list)
      .then((res) => {
        _lists = res.data
        getLists()

      })
  }

  toggleListStatus(listId, getLists) {
    var list = list.find(i => i._id == listId)
    list.completed = !list.completed
    api.put(listId, list)

      .then((res) => {
        _lists = res.data
        getLists()

      })
  }
  delete(_id, draw) {
    api.delete(_id)
      .then((res) =>
        this.getLists(draw)
      )
  }
}
