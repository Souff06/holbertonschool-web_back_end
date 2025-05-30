export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
            && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Must be a number');
    }
    this._sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
