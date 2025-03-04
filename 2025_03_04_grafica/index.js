import {select} from "d3";
const svg = select("#app").append("svg");

svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

const canvas = svg.append("g")
  .attr("transform", "translate("+window.innerWidth/2+","
                                +window.innerHeight/2+"),"
                                +"rotate(45)");
canvas.append("rect")                              
.attr("width", 10)
.attr("height", 50)
.attr("fill", "#D2D616FF")
.attr("x", 0)
.attr("y", 0)




