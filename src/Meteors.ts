import {DOMCacheGetOrSet} from "./Cache";
import {globalData as data, globalTemp as temp} from "./Data";
import {getRandom, getRandomInt} from "./Misc";

export function createMeteor(cl?: string, a?:number){
    const area = a??getRandomInt(1, 3)
    const container = DOMCacheGetOrSet(`mainMapContainer${area}`)
    const newAst = document.createElement(`meteor${temp.meteors}`)

    newAst.classList.add('meteor')
    newAst.style.marginLeft = `${getRandom(1, 4)}rem`
    newAst.style.marginRight = `${getRandom(1, 5)}rem`
    newAst.style.marginTop = area===2?`${getRandom(1, 5)}rem`:`0rem`
    newAst.style.marginBottom = area===2?`${getRandom(1, 20)}rem`:`${getRandom(1,10)}rem`
    newAst.style.height = `${getRandom(1.562, 2)}rem`
    newAst.style.width = `${getRandom(2, 2.5)}rem`
    if(cl) newAst.style.backgroundColor = `${cl}`
    container.appendChild(newAst)
    temp.meteors++
}
