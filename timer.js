// -----------------------------------------------------------------------------
// Class Timer
// -----------------------------------------------------------------------------

class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    // Assign 3 arguments to instance variables
    // So we can refer back to them later from other methods in the class
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Check if the callbacks argument was passed
    // If it was, assign the 3 callback functions to instance variables
    // So we can refer back to them later from other methods in the class
    // these are used to signal events to outside of the Timer class
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    // Add/bind event listeners to the buttons
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // CLASS METHODS

  start = () => {
    this.startButton.disabled = true; // Disable the start button
    if (this.onStart) {
      // Call the onStart method if it exists
      // This shares the durationInput value (starting time remaining value) with the onStart method to help the circle animation
      this.onStart(this.timeRemaining);
    }
    this.tick(); // Call tick method immediately, so the timer starts immediately
    // using 'this.interval' means that we can refer to it in other methods
    this.interval = setInterval(this.tick, 20); // Call tick method every 20ms
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause(); // Call the pause method to stop the timer when it reaches 0
      // Check if the onComplete method exists
      if (this.onComplete) {
        this.onComplete(); // Call the onComplete method if it exists
      }
    } else {
      // this uses the getter and setter methods below
      // to get the current value of the input and then set it to a new value
      // Decrement the value of the input by the same 50ms interval set in the start method
      this.timeRemaining = this.timeRemaining - 0.02;
      // Check if the onTick method exists
      if (this.onTick) {
        // Call the onTick method if it exists
        // share the time remaining with the onTick method so it can be used in the circle animation
        this.onTick(this.timeRemaining);
      }
    }
  };

  pause = () => {
    this.startButton.disabled = false; // Enable the start button
    clearInterval(this.interval); // Clear the interval (stop the timer)
  };

  onDurationChange = () => {
    // console.log("Duration input was changed!");
  };

  // GETTER AND SETTER METHODS
  // allow us to access the value of the input from other methods
  // without having to call the method
  // e.g. instead of calling this.timeRemaining() we can just call this.timeRemaining
  // and it will return the current value of the input
  // this is beneficial because it makes the code more readable
  get timeRemaining() {
    // parseFloat is used to convert a string to a number (with decimal points)
    return parseFloat(this.durationInput.value); // Get the current value of the input
  }
  // Set the value of the input
  // e.g. this.timeRemaining = 10
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2); // Set the value of the input
  }
}
