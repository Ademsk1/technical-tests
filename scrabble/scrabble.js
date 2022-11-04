
let letters = []
const LETTERS  = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const e = Array(12).fill('E')

let distribution = ()=> {
    const myDist = []
    const dist = [12,9,8,6,4,3,2,1]
    const distLetters = [['E'],['A','I'],['O'],['N', 'R', 'T'],['L', 'S', 'U', 'D' ],['G'],['B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y'],['K', 'J', 'X', 'Q', 'Z'],]
    for (let [numLetters,letters] of [dist,distLetters]) {
        for (letter of letters) {
        let thisDist = Array(numLetters).fill(letter)
        myDist.concat(thisDist)
        }
    }
    return myDist
}

let points = (letters) =>{
    let currentPoints = 0
    const pointDict = {10:['Q', 'Z' ],9:['J', 'X'],5:['K'],3:['F', 'H', 'V', 'W', 'Y'],2:['D', 'G'],1: ['E', 'A', 'I', 'O', 'N', 'R', 'T', 'L', 'S', 'U']}
    for (let letter of letters) {
        for (const [key,value] of Object.entries(pointDict)) {
            if (value.includes(letter)) {
                currentPoints+=Number(key)
            }
        }
    }
    return currentPoints
}


let shuffle = ()=> {
    const myLetters = []
    for (let i =0;i<7;i++) {
        myLetters.push(LETTERS[Math.floor(Math.random()*26)])
    }
}