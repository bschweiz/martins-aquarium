// this greeting tests to make sure FishDataProvider.js is importing successfully into main.js 
console.log("welcome fucker")

// establishes the array fishCollection with will provide data to populate webpage 
const fishCollection = [
    {
        name: "Bubba",
        food: "crustaceans",
        species: "Mola mola",
        length: 5.9,
        location: "Temperate and Tropical Oceans Worldwide",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sunfish2.jpg"
    },

    {
        name: "Jimbo",
        food: "Small fish",
        species: "Pterois",
        length: 0.3,
        location: "Indo-Pacific Oceans",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    },

    {
        name: "Steve",
        food: "Smaller fish",
        species: "Sphyraena",
        length: 5.5,
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
        length: 5.9,
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

export const useFish = () => {
    return fishCollection.slice()
}

// export const addFish = (fishObject) => {
//     fishCollection.push(fishObject)
// }