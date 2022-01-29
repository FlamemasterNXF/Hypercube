import Decimal from "break_eternity.js"
import { D, globalData as data, globalTemp as temp } from "./Data"
import {DOMCacheGetOrSet} from "./Cache"
import {format} from "./Formatting"

export class Tech {
    name:string
    description:string
    energyReq:Decimal
    purchaseable:boolean
    otherReq:string

    public constructor(name:string,description:string,energyReq:Decimal,purchaseable:boolean,otherReq:string) {
        this.name = name
        this.description = description
        this.energyReq = energyReq
        this.purchaseable = purchaseable
        this.otherReq = otherReq
    }
}
export const initalizeTechs = () => {
    temp.techs[0] = new Tech('Init', 'Activate the Miner and Compactor', D(0), false,"World Union Approval Required!")
    temp.techs[1] = new Tech('Better Drills', 'Double Miner Production', D(300), true,"Nothing Special Required")
    temp.techs[2] = new Tech('Low-G Optimization', 'Miner Production is better based on how many Miners you have', D(1000), true,"Nothing Special Required")
    temp.techs[3] = new Tech('Advanced Circuits', 'Miners require -30J each', D(5000), true,"1 Penteract Required!")
    temp.techs[4] = new Tech('???', 'This Tech is not yet known...', D(0), false,"???")
    temp.techs[5] = new Tech('???', 'This Tech is not yet known...', D(0), false,"???")
    temp.techs[6] = new Tech('???', 'This Tech is not yet known...', D(0), false,"???")
    temp.techs[7] = new Tech('Retroactive Compacting', 'Cubes require -1 Square for each Cube Type you have at least 1 of', D(450), true,"Nothing Special Required")
    temp.techs[8] = new Tech('Retroactive Optimization', 'All Cube Types produce more Energy for each Cube Type you have at least 1 of', D(750), true,"Nothing Special Required")
    temp.techs[9] = new Tech('High Dimension Stability', 'Divide the cost of all Cube Types above Cube by 1.1', D(2000), true,"Nothing Special Required")
    temp.techs[10] = new Tech('Energetic Cores', 'All Cube Types have +1 effective dimensions for energy production purposes (Cubes produce 200 Joules, Tesseracts produce 3000 Joules, etc)', D(1e6), true,"100 Meteorite Shards are required!")
    temp.techs[11] = new Tech('???', 'This Tech is not yet known...', D(0), false,"???")
    temp.techs[12] = new Tech('???', 'This Tech is not yet known...', D(0), false,"???")
}