import {calculateCompact, calculateEnergyGain, calculateMinerStuff, calculateSquareGain} from "./Calc";
import {globalData as data, globalTemp as temp, D} from "./Data";
import Decimal from "break_eternity.js";

export function increase(diff:number){
    data.squares = data.squares.plus(temp.squaresGen.times(diff))
    //data.minerals[0] = data.minerals[0].plus(temp.mineralsGen.times(diff))
}