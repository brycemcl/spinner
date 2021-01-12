((frames, interval) => {
  frames.reduce((previous, current) => {
    setTimeout(() => {
      setInterval(() => {
        process.stdout.write(current);
      }, interval * frames.length);
    }, previous);
    return interval + previous;
  }, interval);
})(["\r|   ", "\r/   ", "\r-   ", "\r\\   "], 100);