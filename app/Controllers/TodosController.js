import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from '../Utils/Writer.js';

function _drawTodos() {
  let template = '';
  appState.todos.forEach(p => template += p.TodoTemplate)
  setHTML('todosDOM', template);
  setText('todo-count', appState.todos.length+ ' left to do')
}
export class TodosController {

constructor() {
  this.getTodos()
  appState.on('todos',_drawTodos)
}

async addTodos(){
  try {
      await  todosService.addTodos()
    } catch (error) {
      console.error('[addTodos]',error)
      Pop.error(error)
    }
}

// TODO delete it's not refreshing it once done
async deleteTodo(id){
  try {
const yes = await Pop.confirm('Are You Sure?')
      if (!yes) {
        return
      }

      await todosService.deleteTodo(id)
    
    } catch (error) {
      console.error('[]',error)
      Pop.error(error)
    }
}


async getTodos(){
  try {
      await todosService.getTodos()
    } catch (error) {
      console.error('[getTodos]',error)
      Pop.error(error)
    }
}


async toggleChecked(id){
  try {
      await todosService.toggleChecked(id)
    } catch (error) {
      console.error('[toggleCheckedTodo]',error)
      Pop.error(error)
    }
}


}