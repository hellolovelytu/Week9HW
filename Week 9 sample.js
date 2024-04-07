// Define a class for a Card
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

// Define a class for the Deck
class Deck {
    constructor() {
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        // Generate 52 cards
        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    // Method to shuffle the deck
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

// Define a class for the War game
class WarGame {
    constructor() {
        this.deck = new Deck();
        this.player1Hand = [];
        this.player2Hand = [];
        this.player1Score = 0;
        this.player2Score = 0;
    }

    // Method to deal cards to each player
    dealCards() {
        this.deck.shuffle();
        for (let i = 0; i < 26; i++) {
            this.player1Hand.push(this.deck.cards.pop());
            this.player2Hand.push(this.deck.cards.pop());
        }
    }

    // Method to play the game
    play() {
        this.dealCards();
        for (let i = 0; i < 26; i++) {
            const player1Card = this.player1Hand[i];
            const player2Card = this.player2Hand[i];
            if (this.compareCards(player1Card, player2Card) === 1) {
                this.player1Score++;
            } else if (this.compareCards(player1Card, player2Card) === -1) {
                this.player2Score++;
            }
        }
        this.displayResults();
    }

    // Method to compare cards and determine the winner
    compareCards(card1, card2) {
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const valueIndex1 = values.indexOf(card1.value);
        const valueIndex2 = values.indexOf(card2.value);
        if (valueIndex1 > valueIndex2) {
            return 1; // Player 1 wins
        } else if (valueIndex1 < valueIndex2) {
            return -1; // Player 2 wins
        } else {
            return 0; // Tie
        }
    }

    // Method to display the results
    displayResults() {
        alert(`Player 1 Score: ${this.player1Score} \nPlayer 2 Score: ${this.player2Score}`);
        if (this.player1Score > this.player2Score) {
            alert("Player 1 wins!");
        } else if (this.player1Score < this.player2Score) {
            alert("Player 2 wins!");
        } else {
            alert("It's a tie!");
        }
    }
}

// Create a new WarGame instance and play the game automatically
const warGame = new WarGame();
warGame.play();
