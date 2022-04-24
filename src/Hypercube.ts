import { globalData, load, CURRENTVERSION } from "./Data";
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
import {createPopup, milestoneCheck, removePopup} from "./Misc";
export type Platonic = null
function calcLoop(){
    calculateEnergyGain()
    calculateMinerStuff()
    calculateSquareGain()
    calculateCompact()
    calculateTechEffects()
}
function mainLoop(){
    const diff:number = (Date.now()-globalData.time)/1000
    globalData.time = Date.now()
    calcLoop()
    increase(diff)
    UpdateHTML()
    milestoneCheck()
}
export function switchTab(i:number){
    const tempOldPage = globalData.currentTab
    globalData.currentTab = i
    tabChangeHTML(tempOldPage, i)
}
function versionCheck(){
    if(globalData.createdVer === "NULL") globalData.createdVer = CURRENTVERSION
    if(!globalData.loadedVers.includes(CURRENTVERSION)) globalData.loadedVers.push(CURRENTVERSION)
}
window.setInterval(function(){
    mainLoop()
}, 50);
window.onload = function (){
    load()
    versionCheck()
    generateEventHandlers()
    initializeTechs()
    tabChangeHTML(-1,globalData.currentTab)
    globalData.milestones[0]?removePopup():createPopup(`It is the Year 2096 \n\nYou have been given rights to a small Moon Mining plot to test your new energy production technology.\n\nYou call the technology a 'Hypercube'.\n\nIt produces energy by compacting squares and cubes into higher-dimensional Cube Types and harnessing those higher dimensions for energy production.`)
}

