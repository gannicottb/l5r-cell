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

Province = function(text) {
  return {
    class: 'card card--province',
    style: 'padding-top: 20px;',
    $text: text,
    _card: null,
    _broken: false,
    _flipped: false,
    _filled() { return this._card !== null;},
    _fill(card) { this._card = card; },
    $update() { this.$components = [this._card] }
  }
}

ProvinceBoard = function(id, provinceCards) {
  return {
    id: id,
    $type: 'div',
    style: 'display: flex',
    _provinces: [],
    _load() { this.$components = this._provinces },
    _add(card) {
      var p = this._provinces.find(p => !p._filled());
      p._fill(card);
    },
    $init() { 
      this._provinces = provinceCards.map(c => Province(c));
      this._load(); 
    },
    $update() { this._load() }
  }
}
