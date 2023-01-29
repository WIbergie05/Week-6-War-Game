// package gameOfWar;

class Card {
     Spades = 0;
     Hearts = 1;
     Clubs = 2;
     Diamonds = 3;

     Jack = 11;
     Queen = 12;
     King = 13;
     Ace = 14;

            cardName;
            cardValue;

Card(cardName, cardValue) {
    this.setCardName(cardName);
    this.setcardValue(cardValue);
}
    setCardName(newCardName) {
    if (newCardName >= 0 && newCardName <= 3) {
        this.cardName = newCardName;
    } else{
        throw new IllegalArgumentException("Card needs to be between 0 and 3");
    }
}
    setCardValue(newCardValue) {
    if(newCardValue < 2 || newCardValue > 14) {
        throw new IllegalArgumentException("Card value needs to be between 2 and 14!");
    }
    this.cardValue = newCardValue;
}
    getValue(){
    return this.cardValue;
}

    toString() {
    let card = "";
    if (cardValue == 2) {
        card += "2";
    } else if (cardVlaue == 3) {
        card += "3";
    } else if (cardVlaue == 4) {
        card += "4";
    } else if (cardVlaue == 5) {
        card += "5";
    } else if (cardVlaue == 6) {
        card += "6";
    } else if (cardVlaue == 7) {
        card += "7";
    } else if (cardVlaue == 8) {
        card += "8";
    } else if (cardVlaue == 9) {
        card += "9";
    } else if (cardVlaue == 10) {
        card += "10";
    } else if (cardVlaue == Jack) {
        card += "Jack";
    } else if (cardVlaue == Queen) {
        card += "Queen";
    } else if (cardVlaue == King) {
        card += "King";
    } else if (cardVlaue == Ace) {
        card += "Ace";
    }

    card += " of ";

    if (cardName == Spades) {
        card += "Spades";
    } else if (cardName == Hearts) {
        card += "Hearts";
    } else if (cardName == Clubs) {
        card += "Clubs";
    } else if (cardName == Diamonds) {
        card += "Diamonds";
    }
    return card;
}
    describe() {
    System.out.println(this.toString() + "/n");
 }

}

class Deck{

    // List<Card> deck = new ArrayList<Card>();
    deck = new ArrayList.Card;

    shuffle() {
        Collection.shuffle(deck);
    }

     PlayCard() {
        // Card playCard = this.deck.get(0);
        playCard = this.deck.get(0);
        this.deck.remove(0);
        return playedCard;
    }

    Deck() {
        for(i = 0; i < 4; i++) {
            for(j = 2; j <= 14; j++) {
                this.deck.add(new Card(i, j));
            }
        }
    }
    // List<Card> getCards() {
        getCards(){
        return this.deck;
    }
    // setCards(List<Card> deck) {
        setCards(deck) {
        this.deck = deck;
    }

       draw() {
        if (deck.isEmpty()) {
            FileSystem.out.println("There are no more cards");
            return null;
        } else {
            Card.drawTopCard = deck.get(0);
            deck.remove(0);
            return drawTopCard;
        }
    }

}

class Player {
    // List<Card> hand = new ArrayList<Card>();
    hand = new ArrayList.Card
        score;
        name;

    Player(name) {
        this.score = 0;
        this.name = name;
    }

describe() {
    System.out.println(name + score + "points!/n");
    for 
    (card, hand) {
        card.describe();
    }
    System.out.println("*******************************");
    } 

    flip() {
        Card.drawTopCard = hand.get(0);
        hand.remove(0);
        return drawTopCard;
    }

    draw(deck) {
        card = deck.draw();
        this.hand.add(card);
    }
    incrementScore() {
        this.score++;
    }
}

class App {

    deck = new Deck();
    shuffle(deck);
    playerOne = ("Erin");
    playerTwo = ("Ken");

        for(i = 1; i >= 26; i++) {
            playerOne.hand.add(deck.draw());
            playerTwo.hand.add(deck.draw());
        }
         playerOne.describe();
         playerTwo.describe();

         for(i = 0; i <= 26; i++) {
            Card.playerOneCard = playerOne.flip();
            Card.playerTwoCard = playerTwo.flip();
                if (playerOneCard.getValue() > playerTwoCard.getValue()) {
                    playerOne.incrementScore();
                } else if (playerOneCard.getValue < playerTwoCard.getValue()) {
                    playerTwo.incrementScore();
                } else {
                    System.out.println();
                }

                if (playerOne.score > playerTwo.score) {
                    System.out.println("Erin" + "Wins!");
                    System.out.println("With a score of" + playerOne.score + "to" + playerTwo.score);
                } else if (playerTwo.score > playerOne.score) {
                    System.out.println("Ken" + "Wins!");
                    System.out.println("With a score of" + playerTwo.score + "to" + playerOne.score);
                } else {
                    System.out.println("Draw");
                }
         }

}