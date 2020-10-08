import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

import { useTip } from './tips/TipDataProvider.js'
import { tipList } from './tips/TipList.js'

FishList()
tipList()

// const allTheFish = useFish();

// console.log(allTheFish)

// for (const x of allTheFish) {
//     console.log(x)
// }