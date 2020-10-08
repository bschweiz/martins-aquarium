

const tipCollection = [
    {
        number: "Martin's Hot Tip #1:",
        text: "DON'T PUT SALT WATER FISH IN FRESH WATER!"
    },
    {
        number: "Martin's Hot Tip #2:",
        text: "DON'T PUT FRESH WATER FISH IN SALT WATER!"
    },
    {
        number: "Martin's Hot Tip #3:",
        text: "DON'T LET THE WATER GET TOO COLD!"
    },
    {
        number: "Martin's Hot Tip #4:",
        text: "DON'T LET THE WATER GET TOO HOT!"
    },
    {
        number: "Martin's Hot Tip #5:",
        text: "Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea coral grouper."
    },
    {
        number: "Martin's Hot Tip #6:",
        text: "Scorpionfish mermaid cat shark, applesnail in blue whale flounder, parrotfish at crab."
    },
    {
        number: "Martin's Hot Tip #6:",
        text: " Colorful blue tang houndshark, swim at banded grunt in, net a king crab."
    },
]

export const useTip = () => {
    return tipCollection.slice()
}

let x = useTip()

console.log(x)