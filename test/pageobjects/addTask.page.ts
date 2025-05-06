import Base from "./base.page"
class AddTask extends Base {
  // locators 
  private get todoListContainer(){
    return $('div[data-testid="todo-list-container"]')
  }
  private get taskInput(){
    return $('input[data-testid="task-input"]');
  }
  private get addTaskButton() {
    return $('button[data-testid="add-task-button"]')
  }
  private get errorMessage() {
    return $('h5[data-testid="error-message"]')
  }
  // methods 
  async addTask(task: string) {
    await this.addText(this.taskInput, task)
    await this.clickEle(this.addTaskButton)
  }
  
  async getErrorMessage() {
    const message = this.getEle(this.errorMessage)
    return (await message).getText()
  }

  async getTodoListContainer() {
    return this.getEle(this.todoListContainer)
  }

  async clickAddTaskButton(){
    await this.clickEle(this.addTaskButton)
  }
}

export default new AddTask();
