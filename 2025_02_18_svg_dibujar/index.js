import {select} from "d3";
const svg = select("#app").append("svg");
svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

const rect = svg.append("rect");
rect.attr("x", window.innerWidth/2.0 );
rect.attr("y", 20);
rect.attr("width", 30);
rect.attr("height",50);
rect.attr("fill","blue");