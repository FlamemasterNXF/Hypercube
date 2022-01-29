import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function compact(){
    console.log(temp.tempCubeGain[0])
    if (temp.tempCubeGain[0].gte(1)){
        data.cubes[0] = data.cubes[0].plus(temp.tempCubeGain[0])
        data.squares = new Decimal(0)
    }
}
export function compactCubes(i:number){
    if (temp.tempCubeGain[i].gte(1)) {
        data.cubes[i+1] = data.cubes[i+1].plus(temp.tempCubeGain[i+1])
        data.cubes[i] = new Decimal(0)
    }
}