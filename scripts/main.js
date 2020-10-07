import { useFish } from './FishDataProvider.js'
import { FishList } from './FishList.js'

const allTheFish = useFish();

console.log(allTheFish)

for (const x of allTheFish) {
    console.log(x)
}

// lines bellow are Jisie's code:


FishList()