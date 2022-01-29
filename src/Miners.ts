import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";
export function buyMiner(){
    if (data.miners[0].lt(temp.maxMiners) && data.cubes[0].gte(10)){
        data.miners[0] = data.miners[0].plus(1)
        data.cubes[0] = data.cubes[0].sub(10)
    }
}