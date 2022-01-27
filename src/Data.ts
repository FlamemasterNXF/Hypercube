import Decimal, { DecimalSource } from 'break_eternity.js';
export const D = (x: DecimalSource | undefined) => new Decimal(x)
//create all the variables in a data object for saving
function getDefaultObject() {
    return {
        testerest: D(1),
        //misc
        time: <number>Date.now(),
        devSpeed: <number>1,
        currentTab: <number>1,
    }
}
export let data = getDefaultObject()
//saving and loading
function save(){
    window.localStorage.setItem('hypercubeSave', JSON.stringify(data))
}
function load() {
    // @ts-ignore
    let savedata = JSON.parse(window.localStorage.getItem('hypercubeSave'))
    if (savedata !== undefined) fixSave(data, savedata)
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
function exportSave(){
    save()
    let exportedData = btoa(JSON.stringify(data));
    const exportedDataText = document.createElement("textarea");
    exportedDataText.value = exportedData;
    document.body.appendChild(exportedDataText);
    exportedDataText.select();
    exportedDataText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(exportedDataText);
}
function importSave(){
    let importedData = prompt("Paste your save data here!")
    // @ts-ignore
    data = Object.assign(getDefaultObject(), JSON.parse(atob(importedData)))
    save()
    location.reload()
}
window.setInterval(function(){
    save()
}, 10000);
window.onload = function (){
    load()
}
//full reset
function fullReset(){
    exportSave()
    window.localStorage.removeItem('hypercubeSave')
    location.reload()
}
function deleteSave(){
    window.localStorage.removeItem('hypercubeSave')
    location.reload()
}

