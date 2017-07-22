Card = function(text) {
  return {
    $type: 'div',
    class: 'card',
    $text: text
  }
}

Deck = function(playAreaId, initialCards) {
  return {
    class: 'card',
    _cards: [],
    _count() { return this._cards.length },
    _draw() {
      if(this._count() > 0) { 
        document.getElementById(playAreaId)._add(this._cards.shift()) 
      } 
    },
    $init() { 
      this._cards = initialCards.map(Card);
      this._cards = _.shuffle(this._cards);
    },
    $update() { 
      this.querySelector('.deck-counter')._display(this._count());
      this.querySelector('.deck-draw').disabled = this._count() <= 0;
    },
    $components: [
      { 
        class: 'deck-counter',
        _display(count) { this.$text = 'Cards: ' + count},
        $init() {this._display(this._count())},
      },
      { 
        class: 'deck-draw', 
        $type: 'button', 
        $text: 'Click To Draw', 
        onclick() { this._draw(); }
      }
    ]
  }
}

Hand = function(playAreaId) {
  return {
    $cell: true,
    id: playAreaId,
    class: 'hand',
    _items: [],
    _add(card) { this._items.unshift(card) },
    $update() { this.$components = this._items;}
  }
}