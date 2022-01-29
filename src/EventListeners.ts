import { DOMCacheGetOrSet } from "./Cache"
import { fullReset } from  "./Data"
import { compact } from "./Compact";
import { buyMiner } from "./Miners";

export const generateEventHandlers = () => {
    DOMCacheGetOrSet("fullReset").addEventListener('click', () => fullReset());
    DOMCacheGetOrSet("compactButton").addEventListener('click', () => compact())
    DOMCacheGetOrSet("buyMiner").addEventListener('click', () => buyMiner())
}