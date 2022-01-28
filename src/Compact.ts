import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function compact(){
    if (temp.tempCubeGain[0].gte(1)){
        data.cubes[0] = data.cubes[0].plus(temp.tempCubeGain[0])
        data.squares = new Decimal(0)
    }
    for (let i=1;i<data.cubes.length;i++){
        if (temp.tempCubeGain[i].gte(1)) {
            data.cubes[i] = data.cubes[i].plus(temp.tempCubeGain[i])
            data.cubes[i-1] = new Decimal(0)
        }
    }
}