import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function calculateEnergyGain(){
    let contributions:Decimal[]= []
    let total = D(0)
    for(let i=0;i<data.cubes.length;i++){
        contributions[i] = (data.cubes[i].times((10**(i+1))*((i+1)))).times(temp.techEffects[8])
        total = total.plus(contributions[i])
    }
    temp.powerGen = total
}
export function calculateMinerStuff(){
    temp.mineralsGen = ((data.miners[0].times(10)).times(temp.techEffects[1])).times(temp.techEffects[2])
    temp.maxMiners = temp.powerGen.div(D(150).sub(temp.techEffects[3])).floor()
}
export function calculateSquareGain(){
    temp.squaresGen = temp.mineralsGen.div(10)
}
export function calculateCompact(){
    temp.tempCubeGain[0] = data.squares.div(D(10).sub(temp.techEffects[7]))
    for (let i=1;i<data.cubes.length;i++){
        temp.tempCubeGain[i] = (data.cubes[i-1].div(10**(i+1))).div(temp.techEffects[9])
    }
    for (let i=0;i<data.cubes.length;i++){
        if (temp.tempCubeGain[i].lt(1)) temp.tempCubeGain[i] = new Decimal(0)
    }
    temp.cubeRequirements[0] = D(10)
    for (let i=1;i<data.cubes.length;i++){
        temp.cubeRequirements[i] = D(10**(i+1))
    }
}
export function calculateTechEffects(){
    temp.techEffects[0] = D(1) //NEVER USED, SET AS A FALLBACK CASE FOR IF I ACCIDENTALLY USE IT
    temp.techEffects[1] = data.hasTech[1]?D(2):D(1)
    temp.techEffects[2] = data.hasTech[2]?data.miners[0].plus(1).log10().sqrt().plus(1):D(1)
    temp.techEffects[3] = data.hasTech[3]?D(30):D(1)
    temp.techEffects[4] = D(1)
    temp.techEffects[5] = D(1)
    temp.techEffects[6] = D(1)
    temp.techEffects[7] = data.hasTech[7]?data.cubesUnlocked:D(0)
    temp.techEffects[8] = data.hasTech[8]?data.cubesUnlocked.div(10).plus(1):D(1)
    temp.techEffects[9] = data.hasTech[9]?D(1.1):D(1)
    temp.techEffects[10] = data.hasTech[9]?D(1):D(0) //implementation WIP
    temp.techEffects[11] = D(1)
    temp.techEffects[12] = D(1)
}