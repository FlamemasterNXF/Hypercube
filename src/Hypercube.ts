import { globalData, load } from "./Data";
import { generateEventHandlers } from "./EventListeners";
import {tabChangeHTML, techBorderHTML, UpdateHTML} from "./UpdateHTML";
import {
    calculateCompact,
    calculateEnergyGain,
    calculateMinerStuff,
    calculateSquareGain,
    calculateTechEffects
} from "./Calc";
import { increase }  from "./Loops";
import { initializeTechs } from "./Lab";
import {createPopup, removePopup} from "./Popup";
export type Platonic = null
function calcLoop(){
    calculateEnergyGain()
    calculateMinerStuff()
    calculateSquareGain()
    calculateCompact()
    calculateTechEffects()
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
    initializeTechs()
    tabChangeHTML(-1,globalData.currentTab)
    globalData.milestones[0]?removePopup():createPopup(`\nIt is the Year 2096 \n\nYou have been given rights to a small Moon Mining plot to test your new energy production technology.\n\nYou call the technology a 'Hypercube'.\n\nIt produces energy by compacting squares and cubes into higher-dimensional Cube Types and harnessing those higher dimensions for energy production.`)
}

