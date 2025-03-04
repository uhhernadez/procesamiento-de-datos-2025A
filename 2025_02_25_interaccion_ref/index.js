import {select} from "d3";
const svg = select("#app").append("svg");

svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

const c = svg.append("circle");
c.attr("cx", 0);
c.attr("cy", 0); 
c.attr("r", 10);
c.attr("fill-opacity",0);
c.attr("stroke","black");

svg.on ("mousemove", (event) => { 
  c.attr("cx", event.x);
  c.attr("cy", event.y); 
});

svg.append("text")
  .attr("x", window.innerWidth/2 )
  .attr("y", 40)
  .attr("stroke", "red")
  .text("Esto es el texto")








