
let player = {
    name:  "Akan",
    chips:  750,
    sayHello: function() {
        console.log("hallla!")

    }

}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let messageEl = document.getElementById("message-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {

    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if ( randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [ firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    cardEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++ ) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ) {
        message = "Draw a card"

    } else if (sum === 21) {
        message = "Yeah! You've got black jack! "
        hasBlackJack = true
       
        
        

    } else  {
        message = "You lost. Game Over! "
        isAlive = false
        
       
    }

    prompt = "do you want to play another game?"


    messageEl.textContent = message
    

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
        
    }
    
}




