import AddTask from "../pageobjects/addTask.page"
import TodoList from "../pageobjects/todoList.page"

describe("Adding Task to To Do List", async () => {
 beforeEach(async () => {
    await browser.url('/');
 })
  it('TDL-001: Todo list should be displayed', async () => {
    await AddTask.getTodoListContainer();
    expect(await AddTask.getTodoListContainer()).toBeDisplayed();
  });
  it('TDL-002: User should recieve error if no task is added', async () => {
    await AddTask.clickAddTaskButton();
    expect(await AddTask.getErrorMessage()).toEqual('Must add a task');
  });
  it('TDL-003: User should successfully add a task', async () => {
    await AddTask.addTask('Look for a therapist');
    expect(TodoList.getList).toBeDisplayed();
  });
  it('TDL-004: User should see error message if input exceeds character limit', async () => {
    await AddTask.addTask("Prepare google presentation slides for Monday’s team meeting")
    expect(await AddTask.getErrorMessage()).toEqual('Task character count exceeded')
  })
})