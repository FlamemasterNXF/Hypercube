import { DOMCacheGetOrSet } from "./Cache"
import { fullReset } from  "./Data"

export const generateEventHandlers = () => {
    DOMCacheGetOrSet("fullReset").addEventListener('click', () => fullReset());
}