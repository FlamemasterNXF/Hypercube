//import EVERYTHING, yes everything.
// region func imports
import { generateEventHandlers } from "./EventListeners";
import { DOMCacheGetOrSet } from "./Cache"
// endregion
// region var imports
import { data } from "./Data";
// endregion
function mainLoop(){
    let diff:number
    diff = (Date.now()-data.time)
    data.time = Date.now()
}
function switchTab(i:number){
    data.currentTab = i
}
window.setInterval(function(){
    mainLoop()
}, 50);
window.onload = function (){
    generateEventHandlers()
}