// region func imports
import { generateEventHandlers } from "./EventListeners";
import {tabChangeHTML, UpdateHTML} from "./UpdateHTML";
import {calculateCompact, calculateEnergyGain, calculateMinerStuff, calculateSquareGain} from "./Calc";
import { increase}  from "./Loops";
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
export function switchTab(i:number){
    let tempOldPage = globalData.currentTab
    globalData.currentTab = i
    tabChangeHTML(tempOldPage, i)
}
window.setInterval(function(){
    mainLoop()
}, 50);
window.onload = function (){
    load()
    generateEventHandlers()
    globalData.currentTab = 1
}

