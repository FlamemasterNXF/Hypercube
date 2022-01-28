import { DOMCacheGetOrSet } from "./Cache"
import { fullReset } from  "./Data"
import {compact} from "./Compact";

export const generateEventHandlers = () => {
    DOMCacheGetOrSet("fullReset").addEventListener('click', () => fullReset());
    DOMCacheGetOrSet("compactButton").addEventListener('click', () => compact())
}