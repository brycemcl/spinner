const setFrameOfAnimation = (frame, interval) => {
  setInterval(() => {
    process.stdout.write(frame);
  }, interval * frames.length);
};

const startLoopedAnimation = (frames, interval) => {
  frames.reduce((previous, current) => {
    setTimeout(() => {
      setFrameOfAnimation(current, interval);
    }, previous);
    return interval + previous;
  }, interval);

  process.stdout.write("\n");
};

const interval = 100;
const frames = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   '
];

startLoopedAnimation(frames, interval);