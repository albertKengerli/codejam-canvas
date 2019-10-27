let url = "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json";
let url2 = "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json";
let url3 ="https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png";

let image = new Image;
image.src = url3;
console.log(image);

let canvas = document.getElementById("canvas");
let button4x4 = document.getElementById("button4x4");
let button32x32 = document.getElementById("button32x32");
let button256x256 = document.getElementById("button256x256");
let buttonBlank = document.getElementById("buttonBlank");

let drawing = canvas.getContext('2d');
let canvasSize = document.getElementById("canvas").clientWidth;

function readConfig(url) {
  return fetch(url)
      .then(response => response.json())
      .then(result => result);
}

function draw(config) {
  let pixelSize = canvasSize / config.length;
  config.forEach((subArray, y) => {
    subArray.forEach((color, x) => {
      drawing.fillStyle = canvasColor(color);
      drawing.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    })
  })
}

function canvasColor(color){
  if (typeof(color) === "string") {
    return "#"+color;
  } else return "rgba("+color.join(",")+")";
}

button4x4.addEventListener("click", function(){
  readConfig(url)
    .then(result => draw(result));
});

button32x32.addEventListener("click", function(){
  readConfig(url2)
    .then(result => draw(result));
});

button256x256.addEventListener("click", function(){
  drawing.drawImage(image, 0, 0, canvasSize, canvasSize);
});

buttonBlank.addEventListener("click", function(){
  drawing.clearRect(0, 0, canvasSize, canvasSize);
});
