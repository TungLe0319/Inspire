import { Clock } from "./Models/Clock.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)
  

  user='TungLe'
  
  /** @type {import('./Models/Todo').Todo[]} */
  todos= []
  falsetodos=[]
  
  
  /** @type {import('./Models/Image').Image | null} */
  image=null
  
  
  /** @type {import('./Models/Weather').Weather | null} */
  weatherDetails = null
  
  
  
  
  /** @type {import('./Models/Quote').Quote | null} */
  quote= null
  
  /** @type {import('./Models/Clock').Clock} */
  clock =  new Clock('tung',true)
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
