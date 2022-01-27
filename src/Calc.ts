import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function calculateEnergyGain(){
    let contributions:Decimal[]= []
    let total = D(0)
    for(let i=0;i<data.cubes.length;i++){
        contributions[i] = data.cubes[i].times((i+1)*10)
        total = total.plus(contributions[i])
    }
    temp.powerGen = total
}
export function calculateMinerStuff(){
    temp.mineralsGen = data.miners[0].times(10)
    temp.maxMiners = temp.powerGen.div(15)
}
export function calculateSquareGain(){
    temp.squaresGen = temp.mineralsGen.div(10)
}