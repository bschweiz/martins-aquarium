
import { Fish } from "./Fish.js"
//this function populates an HTML template with data from the object passed to it
//and generated a "card" of HTML for the webpage


import { useFish } from "./FishDataProvider.js"
// this function peels of a slice from our array of fishes,
// provides a new arraw for an indiviual fish


export const FishList = () => {
    const contentElement = document.querySelector(".fishList")
    
    const fishValues = useFish()
    
    // Generate ALL THE HTML for ALL THE FISH 

    let fishHTMLRepresentations = "";

    for (const x of fishValues) {
        fishHTMLRepresentations += Fish(x)
    }

     // Add the individual fish element
    contentElement.innerHTML += `

      ${fishHTMLRepresentations}`
    }