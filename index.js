// TODO: Refactor to use modules
// TODO: Refactor to have initialise function to start the app and call the Timer class

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// -----------------------------------------------------------------------------
// Class instances
// -----------------------------------------------------------------------------

// The argument object ({}) is used to signal events to outside of the Timer class
// These methods are passed in as arguments to the Timer class
// This is useful because it allows us to signal events to the outside world without having to hard code them into the Timer class
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("💥 Timer Started!");
  },
  onTick() {
    console.log("⏳ Timer Ticking!");
  },
  onComplete() {
    console.log("⌛️ Timer Completed!");
  },
});
