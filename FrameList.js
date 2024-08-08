export default class FrameList {
  frames = [];

  add(frame) {
    this.frames.push(frame);
  }

  get(index) {
    return this.frames[index];
  }

  last() {
    const lastIndex = this.frames
      .length - 1;

    return this.get(lastIndex);
  }
}
