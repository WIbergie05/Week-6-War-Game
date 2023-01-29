const Suits = Object.freeze ({
    CLUBS : ['Clubs', '♣'], 
    DIAMONDS : ['Diamonds', '♦'],    
    HEART : ['Hearts', '♥'],
    SPADES : ['Spades', '♠']
})

const Rank = Object.freeze({
    TWO : ['2', 2],
    THREE : ['3', 3],
    FOUR : ['4', 4],
    FIVE : ['5', 5],
    SIX : ['6', 6],
    SEVEN : ['7', 7],
    EIGHT : ['8', 8],
    NINE : ['9', 9],
    TEN : ['10', 10],
    JACK : ['J', 11],
    QUEEN : ['Q', 12],
    KING : ['K', 13],
    ACE : ['A', 14]

    //I need a way to return the letter value
    ///I need a way 
})


class Card{
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
    } 

    get symbol(){
        if(Array.isArray(this.suit)){
            return this.suit[1];
        }
    }

    get symbolWords(){
        if (Array.isArray(this.suit)){
            return this.suit[0];
        }
    }

    get value(){
        if(Array.isArray(this.rank)){
            return this.rank[1];
        }
    }

    get rankString(){
        if(Array.isArray(this.rank)){
            return this.rank[0];
        }
    }

}


class Deck{
    constructor(Rank, Suits){
        this.deck = []
        for(let cardRank in Rank){
            for(let cardSuit in Suits){
                this.deck.push(new Card(Rank[cardRank], Suits[cardSuit]))
            }
        }
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

}


class Player{
    constructor(){
        this.hand = [];
        this.gameOver = false;
    }
}


class Game{
    constructor(player1, player2, gameDeck){
        this.player1 = player1;
        this.player2 = player2;
        this.deck = gameDeck;
        this.table = []
    }

    dealCards(){
        while(this.deck.length > 0){
            if (this.deck.length % 2 == 0){
                this.player1.hand.push(this.deck.pop())
            }
            else if(this.deck.length % 2 == 1){
                this.player2.hand.push(this.deck.pop())
            }
            else{
                console.log('Something went wrong with dealing')
            }
        }
    }

    playCards(){
        //deal cards to table
        this.table.push(this.player1.hand.pop())
        this.table.push(this.player2.hand.pop())

   }


   dealWithTie(){
    //each player places three more cards to the table creating a kitty for this round of war
    this.playCards()
    this.playCards()
    this.playCards()
    //show the total kitty for entertainment
    //Deal cards that will be play against each other for this round of evaluation
    this.playCards()
    this.display_cards()
    //Now we want to take the last card (player2 card) and the second to last card(player1 card)
    this.evaluate(this.table[this.table.length-2],this.table[this.table.length-1] )
}

    evaluate(card1, card2){
        //If the round is a tie
        if (card1.value === card2.value){
            console.log(`Tie: ${card1.value}, ${card2.value}`);
            if(this.player1.hand.length >=  4 && this.player2.hand.length >= 4){
                this.dealWithTie()
            }

            else if(this.player1.hand.length < 4){
                while(this.table.length > 0){
                    this.player2.hand.push(this.table.pop())
                }
                while(this.player1.hand.length > 0){
                    this.player2.hand.push(this.player1.hand.pop())
                }
                console.log('Player 1 Loses. Not Enough Cards to complete Round.')
            }

            else if(this.player2.hand.length < 4){
                while(this.table.length > 0){
                    this.player1.hand.push(this.table.pop())
                }
                while(this.player2.hand.length > 0){
                    this.player1.hand.push(this.player2.hand.pop())
                }
                console.log('Player 2 Loses. Not Enough Cards to complete Round.')
            }

            else if(this.player2.hand.length < 4 && this.player2.hand.length < 4){
                console.log('Both Players Tie! Neither player has enough cards to complete round.')
            }

            else {
                console.log("Somehow the tie logic broke")
            }
        }

        //if player 1 wins
        else if(card1.value > card2.value){
            console.log(`PLAYER 1 WINS: ${card1.value}, ${card2.value}`);
            while(this.table.length > 0){
                this.player1.hand.push(this.table.pop());
            }
            
        }

        //if player 2 wins
        else if(card1.value < card2.value){
            console.log(`Player 2 Wins: ${card1.value}, ${card2.value}`);
            while(this.table.length > 0){
                this.player2.hand.push(this.table.pop());
            }
        }

        //if the evaluation has a latent bug
        else{
            console.log("The cards did not properly Evaluate.")
        }

    }

    display_cards(){
        let card1 = this.table[this.table.length - 2];
        let card2 = this.table[this.table.length - 1];
        console.log(`\n\n${card1.rankString} of ${card1.symbol}\nVS.\n${card2.rankString} of ${card2.symbol}\n\n`)
        
    }
    


}

function runGame(){
    newGame.playCards();

    newGame.display_cards()
    newGame.evaluate(newGame.table[0], newGame.table[1]);
    console.log(`Player One Card Count: ${player1.hand.length},\nPlayer Two Card Count: ${player2.hand.length}`);
    
}

let player1 = new Player;
let player2 = new Player;
let gameDeck = new Deck(Rank, Suits);
let newGame = new Game(player1, player2, gameDeck.deck);

newGame.dealCards();


while(player1.hand.length > 0 && player2.hand.length > 0){
    runGame();
}
