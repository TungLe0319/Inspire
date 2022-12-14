import { appState } from '../AppState.js';
import { Todo } from '../Models/Todo.js';
import { SandBox } from './AxiosService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from "../Utils/Pop.js";
class TodosService {
  // @ts-ignore

  async addTodos() {

   
    window.event.preventDefault();
    const form = window.event.target;
    let formData = getFormData(form);
    // console.log(formData);
    const res = await SandBox.post(`/api/${appState.user}/todos`, formData);
    // console.log(res.data);
    let newTodo = new Todo(res.data);
    form.reset();
    appState.todos = [ ...appState.todos, newTodo];
  }

  async deleteTodo(id) {
    //  let singleTodo= appState.todos.find(t => t.id == id)

    await SandBox.delete(`/api/${appState.user}/todos/${id}`);
    appState.todos = appState.todos.filter((t) => t._id != id);

    appState.emit('todos');
  }

  async getTodos() {
    const res = await SandBox.get(`/api/${appState.user}/todos`);
    appState.todos = res.data.map((t) => new Todo(t));
  }

  async toggleChecked(id) {
    const todo = appState.todos.find((t) => t._id == id);
    if (!todo) {
      throw new Error('BAD ID');
    }

    todo.completed = !todo.completed;

    await SandBox.put(`/api/${appState.user}/todos/${id}`, todo);
    appState.emit('todos');
  }

  getCheckCount() {
    let done = appState.todos.filter((t) => t.completed == false);
    return done;
  }
}

export const todosService = new TodosService();
