// gameOfWar;

class Card {
    suit = ['Spade', 'Heart', 'Club', 'Diamond']
    faceCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']


constructor(faceCard, suit) {
    this.faceCard = faceCard
    this.suit = suit
    }

    flipCard(){
        return this.faceCard + 'of' + this.suit
    }

}

class Deck{
    constructor() {
        this.cards = [];
        let i = 0;
        for (let face of Card.faceCard) {
            for (let suit of Card.suit) {
               this.cards[iterator++] = new Card(faceCard, suit);
               }
        }
    }

    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let j = Math.floor(Math.random() * this.cards.length);
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
     }
}

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.hand = [];
        if (typeof this.name != 'string') {
            throw Error ('Name can only have letters')
        }
    }
}

let player1 = new Player('Erin');
let player2 = new Player('Ken');
let deck = new Deck();
deck.shuffle();
function dealHand(deck, player1, player2){
    for ( let i = 0; i < deck.cards.length; i = i +2 ) {
        player1.hand.push(deck.cards[i]);
        player2.hand.push (deck.cards[i + 1]);
    }
}

function playGame(player1, player2){
    let turns = player1.hand.length;
    for (let i = 0; i < turns; i++){
        let cardPlayed1 = player1.hand.pop();
        let cardPlayed2 = player2.hand.pop();

        let displayTurns = `${player1.name} play ${cardPlayed1.showCard()} and ${player2.name}
        plays ${cardPlayed2.showCard()}.`;

        let cardPlayed1Value = Card.face.indexOf(cardPlayed1.face);
        let cardPlayed2Value = Card.face.indexOf(cardPlayed2.face);

        if (cardPlayed1Value > cardPlayed2Value) {
            console.log(displayTurns + `${player1.name} win this round!`);
            player1.score++;
        }else if (cardPlayed1Value < cardPlayed2Value) {
            console.log(displayTurns + `${player2.name} wins this round!`);
            player2.score++;
    }else {
        console.log(displayTurns + 'No one wins, no score!');
        }
    }
}

function endGame(player1, player2) {
    if (player1.score > player2.score){
        console.log (`${player1.name} won the match with ${player1.score} points! \n
        ${player2.name} had a score of ${player2.score} points!`);
    }else if (player1.score < player2.score){
        console.log (`${player2.name} won the match with ${player2.score} points! \n
        ${player1.name} had a score of ${player1.score} points!`);
    }else {
        console.log('Nobody wins! It is a draw!');
    }
}

dealHand(deck, player1, player2);
startGame(player1, player2);
endGame(player1, player2);