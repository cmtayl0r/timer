// TODO: Refactor to use modules
// TODO: Refactor to have initialise function to start the app and call the Timer class
// TODO: Reset the circle animation when the timer is paused
// TODO: Have predefined durations for the timer
// TODO: Have recent durations saved in local storage

// -----------------------------------------------------------------------------
// DOM Elements
// -----------------------------------------------------------------------------

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("#circle");

// -----------------------------------------------------------------------------
// Circle Animation
// -----------------------------------------------------------------------------

// calculate the perimeter of the circle using the radius and the formula 2 * π * r
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
// set the stroke-dasharray attribute to the perimeter of the circle
// this will allow us to animate the circle using the stroke-dashoffset attribute
circle.setAttribute("stroke-dasharray", perimeter);

// -----------------------------------------------------------------------------
// Class instances / App initialisation
// -----------------------------------------------------------------------------

// This is the duration value that is shared with the onStart method
// It is at the global scope so it can be accessed by the onStart method and the onTick method
let duration;

// The argument object ({}) is used to signal events to outside of the Timer class
// These methods are passed in as arguments to the Timer class
// This is useful because it allows us to signal events to the outside world without having to hard code them into the Timer class
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log("💥 Timer Started!");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    // This is the circle animation using the stroke-dashoffset attribute
    // This works by decrementing the stroke-dashoffset attribute by the same amount as the time remaining
    // This makes the circle appear to be shrinking
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter // this is the formula to calculate the stroke-dashoffset
    );
  },
  onComplete() {
    console.log("⌛️ Timer Completed!");
  },
});
