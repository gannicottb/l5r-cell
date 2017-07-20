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
    _cards: [],
    _count() { return this._cards.length },
    $init() { 
      this._cards = sampleCards.map(Card);
      this.$components.push({ id: 'deck-counter', $text: this._count(), class: 'card'})
    },
    onclick() { if(this._count() > 0) { document.querySelector('#hand')._add(this._cards.pop()) } },
    $update() { this.querySelector('#deck-counter').$text = this._count()},
    $components: []
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