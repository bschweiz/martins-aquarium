
import { Tip } from "./Tip.js"
//this function populates an HTML template with data from the object passed to it
//and generated a "card" of HTML for the webpage


import { useTip } from "./TipDataProvider.js"
// this function peels of a slice from our array of fishes,
// provides a new array for an indiviual fish


export const tipList = () => {
    const contentElement = document.querySelector(".tips")
    
    const tipValues = useTip()
    
    // Generate ALL THE HTML for ALL THE TIPS 

    let tipHTMLRepresentations = "";

    for (const x of tipValues) {
        tipHTMLRepresentations += Tip(x)
    }

     // Add the individual tip element
    contentElement.innerHTML += `
      ${tipHTMLRepresentations}
`
}

