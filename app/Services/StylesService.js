import { appState } from '../AppState.js';
import { Style } from '../Models/Style.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from '../Utils/Pop.js';

class StylesService {
  toggleTheme() {
    let root = document.body;

    let style = appState.style;
    style.light = !style.light;
    appState.emit('style');
    console.log(style);
    if (!style.light) {
      root.style.setProperty('--primary-bg', 'rgba(225, 218, 230, 0.623)');

      root.style.setProperty('--primary-accent', ' rgb(0, 195, 255)');
      root.style.setProperty(
        '--primary-text-shadow',
        ' 1px 1px black, 0px 0px 5px rgb(145, 145, 146)'
      );
      root.style.setProperty('--primary-font-color', '#111927');
      root.style.setProperty('text-light', '#111927');

      root.style.setProperty('--primary-font', 'audiowide');
      appState.emit('style');
      return;
    }
    root.style.setProperty('--primary-bg', ' rgba(11, 5, 15, 0.623)');

    root.style.setProperty('--primary-accent', ' rgb(169, 8, 233)');
    root.style.setProperty(
      '--primary-text-shadow',
      ' 1px 1px black, 0px 0px 2px rgb(11, 11, 39)'
    );
    root.style.setProperty('--primary-font-color', ' aliceblue');
    root.style.setProperty('--primary-font', 'roboto');
    appState.emit('style');
    return;
  }


}

export const stylesService = new StylesService();
