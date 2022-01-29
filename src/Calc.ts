import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function calculateEnergyGain(){
    let contributions:Decimal[]= []
    let total = D(0)
    for(let i=0;i<data.cubes.length;i++){
        contributions[i] = data.cubes[i].times((10**(i+1))*((i+1)))
        total = total.plus(contributions[i])
    }
    temp.powerGen = total
}
export function calculateMinerStuff(){
    temp.mineralsGen = data.miners[0].times(10)
    temp.maxMiners = temp.powerGen.div(150).floor()
}
export function calculateSquareGain(){
    temp.squaresGen = temp.mineralsGen.div(10)
}
export function calculateCompact(){
    temp.tempCubeGain[0] = data.squares.div(10)
    for (let i=1;i<data.cubes.length;i++){
        temp.tempCubeGain[i] = data.cubes[i-1].div(100^i+1)
    }
    for (let i=0;i<data.cubes.length;i++){
        if (temp.tempCubeGain[i].lt(1)) temp.tempCubeGain[i] = new Decimal(0)
    }
}