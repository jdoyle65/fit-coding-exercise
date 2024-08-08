export default class FrameScoreCalculator {
  constructor(frame, nextFrame) {
    this.frame = frame;
    this.nextFrame = nextFrame;
  }

  calculate() {
    const { rolls: frameRolls } = this.frame;
    const nextFrameRolls = this.hasNextFrame() ? this.nextFrame.rolls : [];
    const isStrike = this.frame
      .isStrike();
    const isSpare = this.frame
      .isSpare();

    if (!isStrike && !isSpare) {
      return frameRolls[0] + frameRolls[1];
    }

    if (this.hasNextFrame) {
      if (isStrike) {
        return 10 + nextFrameRolls[0] + nextFrameRolls[1];
      }

      if (isSpare) {
        return 10 + nextFrameRolls[0];
      }
    }
  }

  hasNextFrame() {
    return !!this.nextFrame;
  }
}
