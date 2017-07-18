Breakable = function(id) {
  return {
    $type: 'div', 
    style: 'width: 50px;border:1px solid black;', 
    $text: id,
    _broken: false,
    _bg_color() { return this._broken ? 'red' : 'white' },
    onclick() { this._broken = !this._broken },
    $update() { this.style.backgroundColor = this._bg_color() }
  }
}

ProvinceBoard = function(ids) {
  return {
    $cell: true,
    $type: 'div',
    style: 'display: flex',
    _ids: ids,
    _province(id) { return Breakable(id)},
    _load() { this.$components = this._ids.map(i => this._province(i)) },
    $init() { this._load() },
    $update() { this._load() }
  }
}
