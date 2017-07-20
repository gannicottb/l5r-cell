var Card = function(text) {
  return {
    $type: 'div',
    class: 'card',
    $text: text
  }
}

Deck = function(sampleCards) {
  return {
    $cell: true,
    id: 'deck',
    class: 'card',
    _cards: [],
    _count() { return this._cards.length },
    $init() { 
      this._cards = sampleCards.map(Card);
      this.$components.push();
    },
    onclick() { if(this._count() > 0) { document.querySelector('#hand')._add(this._cards.pop()) } },
    $update() { this.querySelector('#deck-counter')._display(this._count())},
    $components: [
      { 
        id: 'deck-counter',
        _display(count) { this.$text = 'Cards: ' + count},
        $init() {this._display(this._count())},
      },
      { $type: 'span', $text: 'Click To Draw'}
    ]
  }
}

Hand = function() {
  return {
    $cell: true,
    id: 'hand',
    style: 'height: 100px; padding: 10px; border:1px dashed black; display: flex',
    _items: [],
    _add(card) { this._items.push(card) },
    $update() { this.$components = this._items;}
  }
}