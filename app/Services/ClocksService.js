import { appState } from '../AppState.js';
import { Clock } from '../Models/Clock.js';

class ClocksService {
  getTime() {
    const d = new Date();

    return d.toLocaleTimeString();
  }
}

export const clocksService = new ClocksService();
