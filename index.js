let cards =  []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let player = {
    Name : "Truphy",
    Chips : 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $" + player.Chips

console.log(cards)

function getRandomCard() {
    let randomNum= Math.floor(Math.random()*13) + 1
    if(randomNum > 10) {
    return 10
} else if(randomNum === 1) {
return 11
} else {
    return randomNum
}

}
function startGame() {
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum =  firstCard + secondCard 
    renderGame()
}
function renderGame() {
    cardsEl.textContent ="cards:" 
    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card!"
    } else if (sum === 21) {
        message = "Wohoo!You have got a black jack!"
        hasBlackJack = true
    }else {
    message = "you are out of the game!"
    isAlive = false
    }
    messageEl.textContent = message
    
}
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
let card = getRandomCard()
sum += card
cards.push(card)
console.log(cards)

renderGame()  
}

}