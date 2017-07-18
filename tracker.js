Tracker = function(label) {
  return {
    $cell: true,
    _count: 0,
    _add() { this._count += 1 },
    _sub() { this._count -= 1 },
    $update() { this.querySelector('.counter-display').$text = this._count },
    $components: [
      {
        $type: 'span',
        $text: label
      },
      { 
        $type: 'span',
        class: 'counter-display',
        $init() { this.$text = this._count }
      },
      { 
        $type: 'button',
        $text: '+',
        onclick() { this._add() }
      },
      { 
        $type: 'button',
        $text: '-',
        onclick() { this._sub() }
      }
    ]
  }
}