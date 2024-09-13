let timer;
let endDate;

// Initialize the timer to show 00:00:00 before starting
document.getElementById("timer").innerHTML =
  "<div class=\"hours\"> \
  <div class=\"numbers\">24</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">00</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">00</div>seconds</div> \
</div>";

document.getElementById("startBtn").addEventListener("click", function() {
  // Make the button invisible
  this.style.display = "none";

  // Calculate the end date as 24 hours from now
  endDate = new Date().getTime() + 24 * 60 * 60 * 1000;

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
      "<div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \
    </div>";
  }, 1000);
});
