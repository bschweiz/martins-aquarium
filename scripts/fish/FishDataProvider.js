// this greeting tests to make sure FishDataProvider.js is importing successfully into main.js 
console.log("welcome fucker")

// establishes the array fishCollection with will provide data to populate webpage 
const fishCollection = [
    {
        name: "Bubba",
        food: "crustaceans",
        species: "Mola mola",
        length: 6,
        location: "Temperate and Tropical Oceans Worldwide",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sunfish2.jpg"
    },

    {
        name: "Jimbo",
        food: "Small fish",
        species: "Pterois",
        length: 0,
        location: "Indo-Pacific Oceans",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    },

    {
        name: "Steve",
        food: "Smaller fish",
        species: "Sphyraena",
        length: 5,
        location: "Tropical and Subtropical Seas",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Barracuda_laban.jpg"
    },

    {
        name: "Dave",
        food: "fish, molluscs, and crustaceans",
        species: "Gymnothorax javanicus",
        length: 13,
        location: "Red Sea",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    },
    
    {
        name: "Bubba Jr.",
        food: "crustaceans",
        species: "Mola mola",
        length: 15,
        location: "Temperate and Tropical Oceans Worldwide",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sunfish2.jpg"
    },

    {
        name: "Jimbo Jr.",
        food: "Small fish",
        species: "Pterois",
        length: 0.3,
        location: "Indo-Pacific Oceans",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    },

    {
        name: "Steve Jr.",
        food: "Smaller fish",
        species: "Sphyraena",
        length: 5.5,
        location: "Tropical and Subtropical Seas",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Barracuda_laban.jpg"
    },

    {
        name: "Dave Jr.",
        food: "fish, molluscs, and crustaceans",
        species: "Gymnothorax javanicus",
        length: 13,
        location: "Red Sea",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    }
]


// export const addFish = (fishObject) => {
    //     fishCollection.push(fishObject)
    // 
    
    export const sortedFish = () => {
        const holyFish = []
        const warFish = []
        const regFish = []
        
        for (const x of fishCollection) {
            if (x.length % 3 === 0) {
                holyFish.push(x)
            }
            else if (x.length % 5 === 0) {
                warFish.push(x)
            }
            else {regFish.push(x)}
        }
        // console.log(holyFish);
        // console.log(warFish);
        // console.log(regFish);
        
        const fishCollectionSorted =  holyFish.concat(warFish,regFish);
        console.log(fishCollectionSorted);

        // return holyFish;
        // return warFish;
        // return regFish;
        return fishCollectionSorted

    }

    var sortedCollection = sortedFish()
    
    export const useFish = () => {
        return sortedCollection.slice()
    }



// export const mostHolyFish = () => {
// // multiples of 3
//     const holyFish = []

//     for (const x of fishCollection) {
//         if (x.length % 13 === 0) {
//             holyFish.push(x)
//         } 
//     }
//     console.log(holyFish);
//     return holyFish;

// }



// export const soldierFish = () => {
// //multipules of 5
//     let soldierFish = []

//     for (const x of fishCollection) {
//         if (x.length % 5 === 0) {
//             soldierFish.push(x)
//         } 
//     }
//     return soldierFish
//     console.log(soldierFish);
// }

// export const nonHolyFish = () => {
//     //any fish whose length is not a multiple of 3 or 5
//     return regularFish
// }
