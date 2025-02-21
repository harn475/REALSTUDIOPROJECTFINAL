let buttons = [];
let links = [
  "https://harn475.github.io/Real-Studio-Project-Canvas-Three/",
  "https://harn475.github.io/Real-Studio-Project-Canvas-Four/",
  "https://harn475.github.io/Real-Studio-Project-Canvas-Two/",
  "https://harn475.github.io/Real-Studio-Project-CanvasOne/"
];
let buttonNames = ["PATIENCE", "MINIMAL", "CREATIVE", "CONCEPTUAL"];
// Create an array for the font-family names (assumed to match loaded fonts)
let buttonFontNames = ["VIRUST", "LEMONMILK-Light", "Komigo3D-Regular", "Mayonice"];

let defaultBg;
let images = [];
let currentBg;
let popup;
let customFont; // For the canvas text

// Variables to load each custom button font (if needed for canvas text elsewhere)
let patiFont, minimalFont, creativeFont, conceptualFont;

function preload() {
  // Load fonts for buttons (these p5.Font objects can be used for canvas drawing)
  patiFont = loadFont("VIRUST.ttf");
  minimalFont = loadFont("LEMONMILK-Light.otf");
  creativeFont = loadFont("Komigo3D-Regular.ttf");
  conceptualFont = loadFont("Mayonice.ttf");
  
  // Load the font used for the canvas text
  customFont = loadFont("asimilates-Regular.ttf");
  
  // Load background images
  images[0] = loadImage("PATIENCE.png");
  images[1] = loadImage("MINIMAL.png");
  images[2] = loadImage("CREATIVE.png");
  images[3] = loadImage("CONCEPTUAL.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
  textFont(customFont);
  defaultBg = color(220);
  currentBg = defaultBg;

  // Create custom pop-up
  popup = createDiv("Here you will find four buttons, each leading to a different set of drawing instructions. Please choose one with your heart, complete the instructions, and then view what it originally looked like by clicking the view image button.");
  popup.style("position", "absolute");
  popup.style("top", "20%");
  popup.style("left", "50%");
  popup.style("transform", "translate(-50%, -50%)");
  popup.style("padding", "20px");
  popup.style("background", "white");
  popup.style("border", "2px solid black");
  popup.style("width", "400px");
  popup.style("text-align", "center");
  popup.style("box-shadow", "5px 5px 10px rgba(0, 0, 0, 0.2)");

  let closeButton = createButton("OK");
  closeButton.parent(popup);
  closeButton.style("display", "block");
  closeButton.style("margin", "10px auto");
  closeButton.mousePressed(() => popup.remove());

  let buttonWidth = 300;
  let buttonHeight = 50;
  let startY = height / 2 - (links.length * buttonHeight) / 2 - 40;

  for (let i = 0; i < links.length; i++) {
    let btn = createButton(buttonNames[i]);
    btn.position(width / 2 - buttonWidth / 2, startY + i * 70);
    btn.size(buttonWidth, buttonHeight);
    btn.style("font-size", "18px");
    // Apply a unique font for each button.
    // (Ensure that the font names below correspond to your font-face definitions or the names in your font files.)
    btn.style("font-family", buttonFontNames[i]);
    btn.style("background-color", "white");
    btn.style("border", "2px solid black");
    btn.mousePressed(() => window.open(links[i], "_blank"));
    btn.mouseOver(() => currentBg = images[i]);
    btn.mouseOut(() => currentBg = defaultBg);
    buttons.push(btn);
  }
}

function draw() {
  if (currentBg instanceof p5.Image) {
    background(currentBg);
  } else {
    background(defaultBg);
  }
  fill(0);
  textFont(customFont);
  textSize(80);
  text("Choose your Instructions", width/2, 100);
}
