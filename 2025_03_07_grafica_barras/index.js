import {select, scaleBand, scaleLinear, axisBottom, axisLeft} from "d3";
const svg = select("#app").append("svg");

svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

const points = [
  {x:10, y:20},
  {x:4, y:5},
  {x:3, y:6},
  {x:2, y:7}
];

points.forEach( (point) => {
  console.log(point);
  console.log(point.x);
  console.log(point.y);
  point.blasfemia = "Esto es raro";
} );

console.log(points);

const futbol = {
  "León" : 26,
  "América" : 23,
  "Tigres UANL" : 19,
  "Toluca" : 18,
  "Necaxa" : 18
};
console.log(futbol);

let keys = Object.keys(futbol);
let x_axis = scaleBand(keys, [0, 300]);
const g_x_axis = svg.append("g")
  .attr("transform", "translate(100, 100)")
  .call(axisBottom(x_axis));

g_x_axis.selectAll("text")
  .attr("transform","rotate(-45)")
  .style("text-anchor","end");