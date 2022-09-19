import { ClocksController } from "./Controllers/ClocksController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { StylesController } from "./Controllers/stylesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherDetailsController } from "./Controllers/WeatherDetailsController.js";


class App {
 todosController= new TodosController()
 imagesController = new ImagesController()

 weatherDetailsController=  new WeatherDetailsController()
 quotesController = new QuotesController()

 clocksController = new ClocksController()

 stylesController= new StylesController()
}

window["app"] = new App();
