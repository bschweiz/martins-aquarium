import { useFish } from './FishDataProvider.js'

const allTheFish = useFish();

// console.log(allTheFish)

for (const x of allTheFish) {
    console.log(x)
}