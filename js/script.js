const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
//grab password selectors from the document
let passwordOne = document.getElementById("password-el-1")
let passwordTwo = document.getElementById("password-el-2")
let passwordGeneratorButton = document.getElementById("password-generator-button")
let passwordOneContainer = []

//create a function to generate the passwords up to 15 characters

let passwordGeneratorMachine = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        let randomCharacter = arr[randomNumberGenerator()]
        if (passwordOneContainer.length < 15) {
            passwordOneContainer.push(randomCharacter)
        }
    }
    return passwordOneContainer
}

//create a function to display the generated passwords

let passwordGenerator = (passwordArray) =>{
    passwordArray.forEach(element => {
        passwordOne.innerText += element
    });
}

//create an es6 Js function to generate random numbers
let randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber
}
