import { DOMCacheGetOrSet } from "./Cache";
import { format, formatWhole, formatTime } from "./Formatting";
import { D, globalData as data, globalTemp as temp } from "./Data";
import Decimal from "break_eternity.js";

export let cubeNames:string[] = ["Cubes","Tesseracts","Penteracts","Hexeracts","Hepteracts","Octeracts","Enneracts","Decagons"]

export function UpdateHTML(){
    DOMCacheGetOrSet("squares").innerText = `You are in control of ${format(data.squares)} Squares. [+${format(temp.squaresGen)}/s]`
    DOMCacheGetOrSet("powerGen").innerText = `Your Hypercube generates ${format(temp.powerGen)} Joules of energy/s`
    DOMCacheGetOrSet("mineralGen").innerText = `Your ${format(data.miners[0])} Miners mine ${format(temp.mineralsGen)} Rare Minerals/s, a Square requires 10 Rare Minerals`

    DOMCacheGetOrSet("compactButton").innerText = `Compact all of your Squares into ${format(temp.tempCubeGain[0])} Cubes \nCompact all of your Cubes into ${format(temp.tempCubeGain[1])} Tesseracts`

    for (let i=0;i<data.cubes.length;i++){
        DOMCacheGetOrSet(`cube${i}`).innerText = `You have ${format(data.cubes[i])} ${cubeNames[i]} \nEach produces ${format((10**(i+1))*((i+1)))} Joules of energy`
    }
    for (let i=0;i<data.cubes.length;i++){
        DOMCacheGetOrSet(`cubeCompact${i}`).innerText = `Compact your ${cubeNames[i]} into ${temp.tempCubeGain[i+1]} ${cubeNames[i+1]}`
    }

    DOMCacheGetOrSet("minerTexts").innerText = `You can currently sustain a maximum of ${format(temp.maxMiners)} Miners \nEach Miner requires 150J of energy`
    DOMCacheGetOrSet("buyMiner").innerText = `Build a Miner MK1 \nUses 10 Cubes`
}