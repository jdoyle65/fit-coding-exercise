import FrameList from './FrameList'
import Frame from './Frame'
import FrameListScoreCalculator from './FrameListScoreCalculator'

export default class BowlingGame {
  frames = new FrameList()
  currentRoll = 1

  constructor() {
    this.frames
      .add(new Frame());
  }

  roll(pinsKnocked) {
    const isLastFrameDone = this.lastFrame()
      .isDone()

    if (isLastFrameDone)
      this.frames
        .add(new Frame())
    
    this.lastFrame()
      .doRoll(pinsKnocked)
    
    return new FrameListScoreCalculator(this.frames)
      .calculate()
  }

  lastFrame() {
    const frames = this.frames
    return frames.last()
  }
}
