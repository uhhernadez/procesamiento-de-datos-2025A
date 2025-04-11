import {select, scaleBand, axisBottom, 
        axisLeft, scaleSequential,interpolateInferno, 
        interpolateTurbo, csv } from "https://esm.run/d3";
const svg = select("#app")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)
            .append("g")
            .attr("transform","translate(100, 100)");

const labelsX = ["A", "B", "C"];            
const labelsY = ["A", "B", "C"];

const x_axis = scaleBand(labelsX, [0, 300]);
const g_x_axis = svg.append("g")
  .attr("transform", "translate(0,300)")
  .call(axisBottom(x_axis));
            
const y_axis = scaleBand(labelsY, [300, 0]);
const g_y_axis = svg.append("g")
  .attr("transform", "translate(0,0)")
  .call(axisLeft(y_axis));

const colorScale = scaleSequential()
        .interpolator(interpolateTurbo)
        .domain([0, 100]);

const data = [
  {x:0, y:0, z:5},
  {x:0, y:1, z:10},
  {x:0, y:2, z:20},
  {x:1, y:0, z:30},
  {x:1, y:1, z:90},
  {x:1, y:2, z:65},
  {x:2, y:0, z:23},
  {x:2, y:1, z:33},
  {x:2, y:2, z:0},
];        

//const url = "http://10.70.62.150:5500/2025_04_01_mapa/data.csv";
const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTowM2fZAdW1B3vrUBaPg38psYBIMeSOD-eYrTy00_K5fiqGZJKErIxRiPzYWPILBigxbzePIbvQneQ/pub?gid=0&single=true&output=csv";
await csv(url, (row) =>{
  console.log(row);
})

const datos = await csv(url);


const tooltip = select("#app")
  .append("div")
  .style("opacity", 0)
  .style("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "2px")
  .style("border-radius", "5px")
  .style("position", "absolute")
  .style("padding", "5px");


datos.forEach((value)=>{
  const {x, y, z} = value;
  const width = x_axis.bandwidth();
  const height = y_axis.bandwidth();
  svg.append("rect")
    .attr("x",x * width)
    .attr("y",y * height)
    .attr("fill", colorScale(z))
    .attr("width", 100)
    .attr("height", 100)
    .attr("stroke", "white")
    .attr("stroke-width", 5)
    .attr("rx",15)
    .on("mouseover", (event)=> {
      tooltip.style("opacity", 1)
    })
    .on("mousemove", (event)=> {
      tooltip.html("El valor es "+ z)
      .style("left", event.x + "px")
      .style("top", event.y + "px");
    })
    .on("mouseleave", (event)=> {
      tooltip.style("opacity", 0)
    })
});