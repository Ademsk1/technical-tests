const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile() {
    const dictLoc = "dictionary.txt"
    const dictionary = readFileSync(dictLoc, 'utf-8');
    const arr = dictionary.split(/\n/);
    return arr;
}
let letters = []
const LETTERS  = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const e = Array(12).fill('E')

let distribution = ()=> {
    let myDist = []
    const dist = [12,9,8,6,4,3,2,1]
    const distLetters = [['E'],['A','I'],['O'],['N', 'R', 'T'],['L', 'S', 'U', 'D' ],['G'],['B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y'],['K', 'J', 'X', 'Q', 'Z'],]
    for (let i =0;i<distLetters.length;i++) {
        for (let letter of distLetters[i]) {
            let thisDist = Array(dist[i]).fill(letter)
            console.log(thisDist)
            myDist = myDist.concat(thisDist)
            console.log(myDist)
        }
    }
    console.log(myDist)
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


let shuffle = (bagOfLetters)=> {
    const myLetters = []
    let rnIndex;
    for (let i =0;i<7;i++) {
        rnIndex = Math.floor(Math.random()*bagOfLetters.length)
        myLetters.push(bagOfLetters.splice(rnIndex,1)[0])
    }
    return myLetters
}

let getDictionary = ()=>{
    let text =syncReadFile()
    return text

}

let matchLetters = (words,letters) => {

}

let findWordGivenLength = (rack,dict) => {
    let givenLength
    let storage = []
    let strWord
    for (word of dict) {
        
        strWord = word.split('')
        if (strWord.every((el)=>rack.includes(el.toUpperCase()))) {
        storage.push(word)
        
        }
        return storage
    }
}


let findBestScore = (words) =>{
    let possiblePoints = []
    for (word of words) {
        possiblePoints.push(points(words.split('')))
        console.log(word,possiblePoints.slice(-1))
    }
   
}


let main = () => {
    let bag = distribution()
    console.log(bag.length)
    let rack = shuffle(bag)

    const dict = getDictionary()
    const possWords = findWordGivenLength(rack,dict)
    findBestScore(possWords)
}   
//main()
main()