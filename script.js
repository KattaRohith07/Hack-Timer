const startDate = new Date(2024, 8, 13, 10, 0, 0).getTime(); // September 13, 2024, 10:00 AM
const endDate = new Date(2024, 8, 14, 10, 0, 0).getTime();   // September 14, 2024, 10:00 AM
let timer;

document.getElementById("startBtn").addEventListener("click", function() {
  // Make the button invisible
  this.style.display = "none";

  // Show the timer and position it at the center of the screen
  const timerElement = document.getElementById("timer");
  timerElement.style.display = "block";

  // Start the countdown
  timer = setInterval(function() {
    const now = new Date().getTime();

    // Calculate the difference between now and the end date
    let diff = endDate - now;

    // Stop the timer if the countdown has ended
    if (diff < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Event has passed!";
      return;
    }

    // Calculate days, hours, minutes, and seconds remaining
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("timer").innerHTML =
      " <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \
    </div>";
  }, 1000);
});
