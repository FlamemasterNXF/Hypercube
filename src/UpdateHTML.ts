import { DOMCacheGetOrSet } from "./Cache";
import { format, formatWhole, formatTime } from "./Formatting";
import { D, globalData as data, globalTemp as temp } from "./Data";
import Decimal from "break_eternity.js";
import {contributions} from "./Calc";

export const cubeNames:string[] = ["Cubes","Tesseracts","Penteracts","Hexeracts","Hepteracts","Octeracts","Enneracts","Decagons"]

export function UpdateHTML(){
    DOMCacheGetOrSet("squares").innerText = `You are in control of ${format(data.squares)} Squares. [+${format(temp.squaresGen)}/s]`
    DOMCacheGetOrSet("powerGen").innerText = `Your Hypercube generates ${format(temp.powerGen)} Joules of energy/s`
    DOMCacheGetOrSet("mineralGen").innerText = `Your ${formatWhole(data.miners[0])} Miners mine ${format(temp.mineralsGen)} Rare Minerals/s, a Square requires 10 Rare Minerals`

    DOMCacheGetOrSet("compactButton").innerText = `Compact all of your Squares into ${format(temp.tempCubeGain[0])} Cubes`

    DOMCacheGetOrSet(`cube${0}`).innerText = `You have ${format(data.cubes[0])} ${cubeNames[0]} \nEach produces ${format(contributions[0].div(data.cubes[0]))} Joules of energy \nEach requires ${format(temp.cubeRequirements[0])} Squares`
    for (let i=1;i<data.cubes.length;i++){
        DOMCacheGetOrSet(`cube${i}`).innerText = `You have ${format(data.cubes[i])} ${cubeNames[i]} \nEach produces ${format(contributions[i].div(data.cubes[i]))} Joules of energy \nEach requires ${format(temp.cubeRequirements[i])} ${cubeNames[i-1]}`
    }
    for (let i=0;i<data.cubes.length;i++){
        DOMCacheGetOrSet(`cubeCompact${i}`).innerText = `Compact your ${cubeNames[i]} into ${format(temp.tempCubeGain[i+1])} ${cubeNames[i+1]}`
    }

    DOMCacheGetOrSet("minerTexts").innerText = data.miners[0].lte(temp.maxMiners) && data.cubes[0].gte(10)?`New Miner can be built!`:`Insufficient power or Cubes \nMiners require 150J of power each`
    DOMCacheGetOrSet("buyMiner").innerText = `Build a Miner MK1 \nUses 10 Cubes`
}
export function techDisplayHTML(i:number){
    DOMCacheGetOrSet("techText").innerText = `${temp.techs[i].name} \n${temp.techs[i].description} \nRequires an Energy production of at least ${format(temp.techs[i].energyReq)}J \n${temp.techs[i].otherReq}`
}
export function techBorderHTML(i:number){
    DOMCacheGetOrSet(`tech${i}`).style.border = data.hasTech[i]?`2px solid goldenrod`:`2px solid green`
}
export function tabChangeHTML(oldPage:number, page:number){
    if (oldPage===-1){
        for (let i=1;i<3;i++){
            DOMCacheGetOrSet(`page${i}`).style.display = `none`
        }
        DOMCacheGetOrSet(`page${page}`).style.display = `flex`
    }
    else{
        DOMCacheGetOrSet(`page${oldPage}`).style.display = `none`
        DOMCacheGetOrSet(`page${page}`).style.display = `flex`
    }
}