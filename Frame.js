export default class Frame {
  rolls = [];

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    return this.rolls[0] +
        this.rolls[1] === 10;
  }

  doRoll(pinsKnocked) {
    this.rolls
      .push(pinsKnocked);
  }

  isDone() {
    return this.rolls
      .length === 2
  }

  getRollScore(index) {
    return this.rolls[index] ?? 0;
  }
}
