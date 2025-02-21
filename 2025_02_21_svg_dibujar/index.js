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