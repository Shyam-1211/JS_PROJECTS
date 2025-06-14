const password = document.querySelector("#Password")
const button = document.querySelector("#start")
const length = 16

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbol = "@#$%^&*()_{}:<>?[];'/"

const Allchar = upperCase + lowerCase + number + symbol

function createpass() {
    console.log("hello");
    
    let word = ""
    word += upperCase[Math.floor(Math.random() * upperCase.length)]    
    word += lowerCase[Math.floor(Math.random() * lowerCase.length)]    
    word += number[Math.floor(Math.random() * number.length)]    
    word += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > word.length) {
        word += Allchar[Math.floor(Math.random() * symbol.length)]
    }
    password.value = word
}
function copy() {
    password.select()
    document.execCommand("copy")
}

button.addEventListener("click", createpass)