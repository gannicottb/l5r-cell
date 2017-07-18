

var Card = function(text) {
  return {
    $type: 'div',
    style: 'width: 50px;border:1px solid black;',
    $text: text
  }
}

Deck = function(sampleCards) {
  return {
    $cell: true,
    id: 'deck',
    _cards: [],
    _count() { return this._cards.length },
    $init() { 
      this._cards = sampleCards.map(Card);
      this.$components.push({ id: 'deck-counter', $text: this._count()})
    },
    onclick() { if(this._count() > 0) { this.$components.push(this._cards.pop()) } },
    $update() { this.querySelector('#deck-counter').$text = this._count()},
    $components: []

  }
}