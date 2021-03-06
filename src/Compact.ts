import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function compact(){
    if (temp.tempCubeGain[0].gte(1)){
        if (data.cubesUnlocked===D(0)) data.cubesUnlocked = D(1)
        data.cubes[0] = data.cubes[0].plus(temp.tempCubeGain[0])
        data.squares = D(0)
    }
}
export function compactCubes(i:number){
    if (temp.tempCubeGain[i+1].gte(1)) {
        if (data.cubesUnlocked===D(i-1)) data.cubesUnlocked = D(i)
        data.cubes[i+1] = data.cubes[i+1].plus(temp.tempCubeGain[i+1])
        data.cubes[i] = new Decimal(0)
    }
    console.log(temp.tempCubeGain[i+1])
}