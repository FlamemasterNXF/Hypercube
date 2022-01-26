//import EVERYTHING, yes everything.
// region func imports
import { generateEventHandlers } from "./EventListeners";
import { DOMCacheGetOrSet } from "./Cache"
// endregion
// region var imports
import { data } from "./Data";
// endregion
export function test(){
    data.testerest = data.testerest.plus(1)
    console.log(data.testerest)
}

window.onload = function (){
    generateEventHandlers()
}