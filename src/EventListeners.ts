import { test } from "./Hypercube";
import { DOMCacheGetOrSet } from "./Cache"

export const generateEventHandlers = () => {
    DOMCacheGetOrSet("testButton").addEventListener('click', () => test());
}