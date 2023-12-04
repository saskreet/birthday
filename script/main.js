// Import the data to customize and insert them into the page
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
  // ... (existing code)

  const tl = new TimelineMax();

  // ... (existing code)

  // .idea-6 animation
  tl.staggerFrom(
    ".idea-6 span",
    0.8,
    {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut
    },
    0.2
  )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=0"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".shusmita-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "+=0"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
  .staggerFromTo(
".wish-hbd span",
0.7,
{
scale: 1.4,
rotationY: 150
},
{
scale: 1,
rotationY: 0,
color: "#ff69b4",
ease: Expo.easeOut
},
0.1,
"party"
)
.from(
".wish h5",
0.5,
{
opacity: 0,
y: 10,
skewX: "-15deg"
},
"party"
)
.staggerTo(
".eight svg",
1.5,
{
visibility: "visible",
opacity: 0,
scale: 80,
repeat: 3,
repeatDelay: 1.4
},
0.3
)
.to(".six", 0.5, {
opacity: 0,
y: 30,
zIndex: "-1"
})
.staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
.to(
".last-smile",
0.5,
{
rotation: 90
},
"+=1"
);

// tl.seek("currentStep");
// tl.timeScale(2);

// Restart Animation on click
const replyBtn = document.getElementById("replay");
replyBtn.addEventListener("click", () => {
tl.restart();
});
};

// Run fetch and animation in sequence
fetchData();
};

// Run fetch and animation in sequence
fetchData();
