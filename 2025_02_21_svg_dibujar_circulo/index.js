import {randomNormal, select} from "d3";
const svg = select("#app").append("svg");
svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

const drawCircle = (x, y, r)=> {
  svg.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", r)
    .attr("fill-opacity",0)
    .attr("stroke","black");
}
drawCircle(50, 50, 20);