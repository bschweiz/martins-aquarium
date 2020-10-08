
import { location } from "./Location.js"
//this function populates an HTML template with data from the object passed to it
//and generated a "card" of HTML for the webpage


import { useLocation } from "./LocationDataProvider.js"
// this function peels of a slice from our array of fishes,
// provides a new array for an indiviual fish


export const locationList = () => {
    const contentElement = document.querySelector(".destinations__list")
    
    const locationValues = useLocation()
    
    // Generate ALL THE HTML for ALL THE LOCATIONS 

    let locationHTMLRepresentations = "";

    for (const x of locationValues) {
        locationHTMLRepresentations += location(x)
    }

     // Add the individual location element
    contentElement.innerHTML += `
      ${locationHTMLRepresentations}
`
}

