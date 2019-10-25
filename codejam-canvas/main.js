  let url = "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json";
  let url2 = "https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json";

  let canvas = document.getElementById("canvas");
  let drawing = canvas.getContext('2d');

  let canvasSize = document.getElementById("canvas").clientWidth;
  let config2 = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
  ];

  //fillRect + fillStyle

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

  readConfig(url)
    .then(result => draw(result));
