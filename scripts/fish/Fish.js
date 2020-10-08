/**
 *  Function "Fish" which renders individual fish objects as HTML
 */

export const Fish = (fishObj) => {
    return `
        <div class="fish">
            <p>Name:</p>
            <p class="fish__name">${fishObj.name}</p>
            <img class="fish__image" src="${fishObj.image}" alt="">
            <p>Species:</p>
            <p>${fishObj.species}</p>
            <p>Length:</p>
            <p>${fishObj.length} ft.</p>
            <p>Habitat:</p>
            <p>${fishObj.location}</p>
            <p>Diet:</p>
            <p>${fishObj.food}</p>
        </div> `
}
