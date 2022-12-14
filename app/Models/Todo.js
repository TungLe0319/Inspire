import { appState } from "../AppState.js";

export class Todo {
  constructor(data) {
    this._id = data._id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }

  get TodoTemplate() {
    return /*html */ `
    
   <li class="border-0 fw-bold  align-items-center list-group-item justify-content-between d-flex ${
     this.completed
       ? 'text--decoration-line opacity-50'
       : ' '
   }" style="width:17rem; height:3rem;">
    <input type="checkbox" name="" class="animate__rubberBand animate__animated selectable" ${
      this.completed ? 'checked ' : ''
    } onchange="app.todosController.toggleChecked('${this._id}')">
    <div class="mx-5 d-flex align-content-center text-wrap">
        <p class="mt-2 text-break text-dark ${
          this.completed ? 'text-decoration-line-through' : ''
        }">${this.description}</p>
    </div>
    <i
        class="mdi ${
          this.completed ? 'mdi-thumb-up ' : ' mdi-trash-can'
        } fs-4 selectable p-1 rounded text-dark"
        onclick="app.todosController.deleteTodo('${this._id}')"
    >
    </i>
</li>

              
    `;
  }

  get thingy(){
    let style = appState.style.style
    return style
  }
}
