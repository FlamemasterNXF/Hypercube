import { globalData as data, globalTemp as temp } from "./Data";
import { DOMCacheGetOrSet } from "./Cache";

export function createPopup(message:string){
    DOMCacheGetOrSet('popup').style.display = `flex`
    DOMCacheGetOrSet('popup').innerText = `${message}`
}
export function removePopup(){
    DOMCacheGetOrSet('popup').style.display = `hidden`
}

export function milestoneCheck(){
    if (!data.milestones[0]) data.milestones[0] = true
    if (temp.powerGen.gte(4e7) && !data.milestones[1]) {
        data.milestones[1] = true
        createPopup(`\nWe need more rare resources.\nIt is time to expand our operations outside of this moon.\n\n[Meteor Tab Unlocked]`)
    }
}