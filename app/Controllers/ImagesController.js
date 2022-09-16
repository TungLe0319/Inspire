
import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { setText } from "../Utils/Writer.js";

function _drawImages() {
  let picture = appState.image

  document.querySelector('body').style.backgroundImage = `url(${picture.largeImgUrl})`
 
 setText('author', picture.author)
}

export class ImagesController{


constructor() {
  this.getImages()
  appState.on('image',_drawImages)
}

async getImages(){
  try {
      await imagesService.getImages()
    } catch (error) {
      console.error('[]',error)
      Pop.error(error)
    }
}

}