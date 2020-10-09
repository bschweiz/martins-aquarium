import { useFish, sortedFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

import { useTip } from './tips/TipDataProvider.js'
import { tipList } from './tips/TipList.js'

import { useLocation } from './locations/LocationDataProvider.js'
import { locationList } from './locations/LocationList.js'

FishList()
tipList()
locationList()



sortedFish()

// const allTheFish = useFish();

// console.log(allTheFish)

// for (const x of allTheFish) {
//     console.log(x)
// }