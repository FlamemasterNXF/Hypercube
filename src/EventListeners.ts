import { DOMCacheGetOrSet } from "./Cache"
import {fullReset, globalData, globalTemp} from "./Data"
import {compact, compactCubes} from "./Compact";
import { buyMiner } from "./Miners";

export const generateEventHandlers = () => {
    DOMCacheGetOrSet("fullReset").addEventListener('click', () => fullReset());
    DOMCacheGetOrSet("compactButton").addEventListener('click', () => compact())
    DOMCacheGetOrSet("buyMiner").addEventListener('click', () => buyMiner())

    for(let i=0;i<globalData.cubes.length;i++){
        DOMCacheGetOrSet(`cubeCompact${i}`).addEventListener('click', () => compactCubes(i))
    }
}