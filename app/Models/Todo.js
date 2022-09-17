

export class Todo {
  constructor(data) {
    this._id = data.id
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }

  get TodoTemplate() {
    return /*html */ `
    
      <li class="    list-group-item justify-content-between d-flex ${
        this.completed ? 'bg-dark text-light' : ''
      }">
                    <input type="checkbox" name="" class="animate__rubberBand animate__animated" ${
                      this.completed ? 'checked' : ''
                    }
                      onchange="app.todosController.toggleChecked('${
                        this._id
                      }')">
                    <div class="mx-5 d-flex align-content-center">
                     <p class="mt-2 "> ${this.description}</p>
                    </div>
                    <i class="mdi mdi-trash-can fs-4 selectable p-1 rounded" onclick="app.todosController.deleteTodo('${
                      this._id
                    }')">
                    </i>
                  </li>
              
    `;
  }
}