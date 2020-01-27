class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // Add the rest of the properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(array) {
    // ...

    if (array.length) {
      var currentIndex = array.length;
    }

    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    console.log(array);
    return undefined;
  }

  checkIfPair(card1, card2) {
    // ...
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else return false;
  }

  isFinished() {
    // ...
    if (this.pairsGuessed === this.cards.length / 2) {
      console.log('game finished');
      return true;
    }
    return false;
  }
}
