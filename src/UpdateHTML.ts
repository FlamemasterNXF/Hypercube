import { DOMCacheGetOrSet } from "./Cache";
import { format, formatWhole, formatTime } from "./Formatting";
import { globalData as data, globalTemp as temp } from "./Data";

export function UpdateHTML(){
    DOMCacheGetOrSet("squares").innerText = `You are in control of ${format(data.cubes[0])} Squares. [+${format(temp.squaresGen)}/s]`
    DOMCacheGetOrSet("powerGen").innerText = `Your Hypercube generates ${format(temp.powerGen)} Joules of energy/s`
    DOMCacheGetOrSet("mineralGen").innerText = `Your ${format(data.miners[0])} Miners mine ${format(temp.mineralsGen)} Rare Minerals/s, a Square requires 10 Rare Minerals`

    DOMCacheGetOrSet("compactButton").innerText = `Compact all of your Squares into ${format(temp.tempCubeGain[0])} Cubes \nCompact all of your Cubes into ${format(temp.tempCubeGain[1])} Tesseracts`
}