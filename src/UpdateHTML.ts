import { DOMCacheGetOrSet } from "./Cache";
import { format, formatWhole, formatTime } from "./Formatting";
import { globalData as data, globalTemp as temp } from "./Data";

export function UpdateHTML(){
    DOMCacheGetOrSet("squares").innerText = `You are in control of ${format(data.squares[0])} Squares. [+${format(temp.squaresGen)}/s]`
    DOMCacheGetOrSet("powerGen").innerText = `Your Hypercube generates ${format(temp.powerGen)} Joules of energy/s`
    DOMCacheGetOrSet("minerals").innerText = `You currently have ${data.minerals} Rare Minerals`
    DOMCacheGetOrSet("mineralGen").innerText = `Your ${formatWhole(data.miners)} Miners mine ${format(temp.mineralsGen)} Rare Minerals/s`

    DOMCacheGetOrSet("compactButton").innerText = `Compact all of your Squares into ${format(temp.tempCubeGain[0])} Cubes \nCompact all of your Cubes into ${format(temp.tempCubeGain[1])} Tesseracts`
}