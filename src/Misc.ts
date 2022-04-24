import { globalData as data, globalTemp as temp } from "./Data";
import { DOMCacheGetOrSet } from "./Cache";

export function createPopup(message:string){
    DOMCacheGetOrSet('popup').style.display = `flex`
    DOMCacheGetOrSet('popup').innerText = `${message}`
}
export function removePopup(){
    DOMCacheGetOrSet('popup').style.display = `none`
}

export function milestoneCheck(){
    if (!data.milestones[0]) data.milestones[0] = true
    if (temp.powerGen.gte(4e7) && !data.milestones[1]) {
        data.milestones[1] = true
        createPopup(`\nWe need more rare resources.\n\nIt is time to expand our operations outside of this moon.\n\nWe must start mining meteors in the Asteroid Belt.\nI'm sure the World Union won't mind, but we don't have time for their formalities...\n\n[Meteor Tab Unlocked]`)
    }
}