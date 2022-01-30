import { globalData as data, globalTemp as temp } from "./Data";
import { DOMCacheGetOrSet } from "./Cache";

export function createPopup(message:string){
    DOMCacheGetOrSet('popup').style.display = `flex`
    DOMCacheGetOrSet('popup').innerText = `${message}`
}
export function removePopup(){
    DOMCacheGetOrSet('popup').style.display = `none`
    if (!data.milestones[0]) data.milestones[0] = true
}