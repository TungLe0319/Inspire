export class Style {


  constructor(data) {
this.name = "Light/Dark Themes"
this.style = data.style
this.light = data.light || false
this.color = data.color
  }

  get Template() {
    return /*html */ `
<form onsubmit="app.stylesController.changeColor()">
<label for="colort" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" name="color" value="#563d7c" title="Choose your color" >
<button  type="submit">submit</button>
</form>

   
    `;
  }
}