let canvas = document.getElementById("canvas");
let drawing = canvas.getContext('2d');
let config;

let url = "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json";

let url2 = "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json";

//fillRect + fillStyle

function readConfig(url) {
  return fetch(url)
      .then(response => response.json())
      .then(result => result);
}

function draw(config) {
  console.log(config);
}

readConfig(url)
  .then(result => draw(result));

//draw(config);
