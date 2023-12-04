// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run animation if so
        if (dataArr.length === dataArr.indexOf(customData) + 1) {
          animationTimeline();
        }
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  // ... (existing animation code)

  const tl = new TimelineMax();

  // ... (existing animation code)

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(
      ".shusmita-dp",
      1,  // Display shusmita-dp after 1 second
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=1" // Start 1 second before the previous animation ends
    )

  // ... (rest of the existing animation code)

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Run fetch and animation in sequence
fetchData();
