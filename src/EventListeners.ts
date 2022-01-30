import { DOMCacheGetOrSet } from "./Cache"
import { fullReset, globalData, globalTemp } from "./Data"
import {compact, compactCubes} from "./Compact";
import { buyMiner } from "./Miners";
import { switchTab } from "./Hypercube";
import { techDisplayHTML } from "./UpdateHTML";
import { removePopup } from "./Popup";
import { buyTech } from "./Lab";

export const generateEventHandlers = () => {
    DOMCacheGetOrSet("fullReset").addEventListener('click', () => fullReset());
    DOMCacheGetOrSet("compactButton").addEventListener('click', () => compact())
    DOMCacheGetOrSet("buyMiner").addEventListener('click', () => buyMiner())

    for(let i=0;i<globalData.cubes.length;i++){
        DOMCacheGetOrSet(`cubeCompact${i}`).addEventListener('click', () => compactCubes(i))
    }

    DOMCacheGetOrSet('labNav').addEventListener('click', () => switchTab(2))
    DOMCacheGetOrSet('mainPageNav').addEventListener('click', () => switchTab(1))

    for (let i=0;i<globalData.hasTech.length;i++){
        DOMCacheGetOrSet(`tech${i}`).addEventListener('mouseover', () => techDisplayHTML(i))
        DOMCacheGetOrSet(`tech${i}`).addEventListener('click', () => buyTech(i))
    }

    DOMCacheGetOrSet('popup').addEventListener('click', () => removePopup())
}