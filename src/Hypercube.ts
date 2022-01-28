// region func imports
import { generateEventHandlers } from "./EventListeners";
import { UpdateHTML } from "./UpdateHTML";
import {calculateCompact, calculateEnergyGain, calculateMinerStuff, calculateSquareGain} from "./Calc";
import {increase} from "./Loops";
// endregion
// region var imports
import {globalData, load} from "./Data";
// endregion
export type Platonic = null
function calcLoop(){
    calculateEnergyGain()
    calculateMinerStuff()
    calculateSquareGain()
    calculateCompact()
}
function mainLoop(){
    let diff:number
    diff = (Date.now()-globalData.time)/1000
    globalData.time = Date.now()
    calcLoop()
    increase(diff)
    UpdateHTML()
}
function switchTab(i:number){
    globalData.currentTab = i
}
window.setInterval(function(){
    load()
    mainLoop()
}, 50);
window.onload = function (){
    generateEventHandlers()
}

