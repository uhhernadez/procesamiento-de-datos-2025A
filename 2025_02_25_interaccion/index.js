import {select} from "d3";

const svg = select("#app").append("svg");

svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

svg.on ("click", (event) => { 
  svg.selectAll("*").remove();
//  svg.select("#id");
});

svg.on ("mousemove", (event) => { 
  svg.append("circle")
    .attr("cx", event.x)
    .attr("cy", event.y) 
    .attr("r", 10)
    .attr("fill-opacity",0)
    .attr("stroke","black");
});








