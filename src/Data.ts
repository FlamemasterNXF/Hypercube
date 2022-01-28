import Decimal, { DecimalSource } from 'break_eternity.js';
import {Platonic} from "./Hypercube";
export const D = (x: DecimalSource | undefined) => new Decimal(x)
//create all the variables in a globalData object for saving
function getDefaultObject() {
    return {
        squares: D(2),
        cubes: [D(0), D(0)],
        minerals: [D(0)],
        miners: [D(1)],
        //misc
        time: <number>Date.now(),
        devSpeed: <number>1,
        currentTab: <number>1,
    }
}
//this is for variables that aren't saved
function defaultTempVars() {
    return {
        squaresGen: D(0),
        mineralsGen: D(0),
        powerGen: D(10),
        maxMiners: D(1),

        tempCubeGain: [D(0), D(0),],
    }
}
export let globalTemp = defaultTempVars()
export let globalData = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('hypercubeSave', JSON.stringify(globalData))
}
export function load() {
    let savedata:string = JSON.parse(window.localStorage.getItem('hypercubeSave') || '{}')
    if (savedata !== undefined) fixSave(globalData, savedata)
    fixOldSaves()
}
//fix saves
function fixSave(main:any=getDefaultObject(), data:any) {
    if (typeof data === "object") {
        Object.keys(data).forEach(i => {
            if (main[i] instanceof Decimal) {
                main[i] = D(data[i]!==null?data[i]:main[i])
            } else if (typeof main[i]  == "object") {
                fixSave(main[i], data[i])
            } else {
                main[i] = data[i]
            }
        })
        return main
    }
    else return getDefaultObject()
}
function fixOldSaves(){
    //fix important things from old versions
}
export function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(globalData));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
export function importSave(){
    let importedData = prompt("Paste your save globalData here!")
    // @ts-ignore
    globalData = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);
//full reset
export function fullReset(){
    exportSave()
    deleteSave()
    globalData = getDefaultObject()
    globalTemp = defaultTempVars()
}
export function deleteSave(){
    window.localStorage.removeItem('hypercubeSave')
    location.reload()
}

