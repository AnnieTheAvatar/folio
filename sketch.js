let canv;

const colors = ['pink', '#ed8cb3', 'hotpink', 'lavenderblush', 'lightpink', 'lightcoral', 'thistle'];

function setup() {
  canv = createCanvas(windowWidth, windowHeight);
  canv.position(0,0);
  canv.style('z-index', '-1');

  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(random(colors));
    let size = random(300);
    ellipse(random(windowWidth)+50, random(windowHeight)+50, size, size);
  }
}

function draw() {

}
