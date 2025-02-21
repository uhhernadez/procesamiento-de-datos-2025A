import {randomNormal, select} from "d3";
const svg = select("#app").append("svg");
svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

let r = 255;
const line = svg.append("line");

line.attr("x1", 0);
line.attr("y1", 0);
line.attr("x2", 100);
line.attr("y2", 100);
line.attr("style", `stroke:rgb(${r},0,0 );stroke-width:2`);

const drawLine = (x1, y1, x2, y2, r, g, b) => {
  svg.append("line")
  .attr("x1",x1)
  .attr("y1",y1)
  .attr("x2",x2)
  .attr("y2",y2)
  .attr("style",`stroke:rgb(${r},${g},${b} );stroke-width:2`) 
}

for (let i = 0; i < 10; i++) {
  drawLine(0,10*i,100, 10*i, 128, 0, 0);  
}