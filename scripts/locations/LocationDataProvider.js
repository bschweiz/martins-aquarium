

const locationCollection = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Selfie_with_Giant_Manta%2C_Bali.jpg/440px-Selfie_with_Giant_Manta%2C_Bali.jpg",
        caption: "In Bali, you can swim with big fish like the Manta Ray and the Sunfish."
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bow_gun_of_the_Fujikawa_Maru_wreck%2C_Truk_Lagoon%2C_Micronesia.jpg",
        caption: "The Chuuk Atoll offers lush coral reefs and a plethora of reef-dwelling fishes."
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Suicide_Cliff_in_Saipan_3.JPG/500px-Suicide_Cliff_in_Saipan_3.JPG",
        caption: "Micronesia is a lovely destination for shore diving and spotting all kinds of fish like the Barracuda."
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Red_sea_coast%2C_Makadi_bay.jpg/500px-Red_sea_coast%2C_Makadi_bay.jpg",
        caption: "The Red Sea offers a unique destination where you can see the Giant Moray Eel."
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}

let x = useLocation()

console.log(x)