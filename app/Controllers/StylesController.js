import { appState } from "../AppState.js";
import { stylesService } from "../Services/StylesService.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



 function _drawColorPicker() {
   setHTML('stylecolor', appState.style.Template);
 }
export class StylesController{
 
 

 
  constructor() {
  appState.on('style')
  }

changeColor(){
  try {
   stylesService.changeColor()
    } catch (error) {
      console.error('[]',error)
      Pop.error(error)
    }
}


  toggleTheme(){
try {
  stylesService.toggleTheme()
  } catch (error) {
    console.error('[]',error)
    Pop.error(error)
  }

  }
}