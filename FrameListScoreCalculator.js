import FrameScoreCalculator from "./FrameScoreCalculator";

export default class FrameListScoreCalculator {
  constructor(frameList) {
    this.frameList = frameList;
  }

  calculate() {
    let score = 0;
    const frameListLength = this.frameList
      .length

    for (let i = 0; i < frameListLength - 1; i++) {
      score += (new FrameScoreCalculator(this.frameList.get(i), this.frameList.get(i + 1))).calculate()
    }
  }
}
