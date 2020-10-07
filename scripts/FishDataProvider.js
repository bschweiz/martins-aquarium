console.log("welcome fucker")

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
        food: "Small fish",
        species: "Pterois",
        length: 0.3,
        location: "Indo-Pacific Oceans",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    },

    {
        name: "Dave",
        food: "Small fish",
        species: "Pterois",
        length: 0.3,
        location: "Indo-Pacific Oceans",
        image: "https://www.seamester.com/wp-content/uploads/2017/03/lionfish-1-big-768x575.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fishObject) => {
    fishCollection.push(fishObject)
}