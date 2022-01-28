// region func imports
import { generateEventHandlers } from "./EventListeners";
import { UpdateHTML } from "./UpdateHTML";
import { calculateEnergyGain, calculateMinerStuff, calculateSquareGain } from "./Calc";
// endregion
// region var imports
import { globalData } from "./Data";
// endregion
export type Platonic = null
function calcLoop(){
    calculateEnergyGain()
    calculateMinerStuff()
    calculateSquareGain()
}
function mainLoop(){
    let diff:number
    diff = (Date.now()-globalData.time)
    globalData.time = Date.now()
    calcLoop()
    UpdateHTML()
}
function switchTab(i:number){
    globalData.currentTab = i
}
window.setInterval(function(){
    mainLoop()
}, 50);
window.onload = function (){
    generateEventHandlers()
}

