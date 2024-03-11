console.log("Hi There!");
// Things our program does

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    // Assign 3 arguments to instance variables
    // So we can refer back to them later from other methods in the class
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Add event listeners to the buttons
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    this.durationInput.addEventListener("change", this.onDurationChange);
  }

  start() {
    console.log("Time to start the timer!");
  }

  pause() {
    console.log("Time to pause the timer!");
  }

  onDurationChange() {
    console.log(this.durationInput.value);
  }

  tick() {}
}

new Timer(
  document.querySelector("#duration"),
  document.querySelector("#start"),
  document.querySelector("#pause")
);
