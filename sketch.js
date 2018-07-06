function setup() {

  console.log("Running...");
  //createCanvas(300, 300);
  noLoop();
  var button = select('#submit');
  button.mousePressed(submitData);

}

function submitData() {
  var title = select('#title').value();
  var status = select('#status').value();
  var notes = select('#notes').value();

  loadJSON('add/' + title + '/' + status + '/' + notes, finished);

  function finished(data) {
    console.log(data);
  }

}
