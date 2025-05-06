import Base from "./base.page"

class TodoList extends Base {
 private get taskList() {
    return $('div[data-testid="tasks-container"]')
 }

 // methods 
 async getList() {
    return this.getEle(this.taskList)
 }
}

export default new TodoList();