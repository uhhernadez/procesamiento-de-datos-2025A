import {select, scaleBand, scaleLinear, axisBottom, axisLeft} from "https://esm.run/d3";

const svg = select("#app")
            .append("svg")
            .append("g")
            .attr("transform","translate(30, 10)"); 

            svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);

const futbol = {
  "León" : 26,
  "América" : 23,
  "Tigres UANL" : 19,
  "Toluca" : 18,
  "Necaxa" : 18
};

// Obtiene todas las etiquetas del arreglo
let keys = Object.keys(futbol);

// Arreglo y un intervalo
let x_axis = scaleBand(keys, [0, 200]);
const g_x_axis = svg.append("g")
  .attr("transform", "translate(0, 100)")
  .call(axisBottom(x_axis));

g_x_axis.selectAll("text")
  .attr("transform","rotate(-45)")
  .style("text-anchor","end");

let y_axis = scaleLinear([0, 100], [100,0]);
const g_y_axis = svg.append("g")
  .attr("transform","translate(0, 0)")
  .call(axisLeft(y_axis));

const drawRect = (w, h, x, y, color, svg) => {
  svg.append("rect")
  .attr("width",w)
  .attr("height",h)
  .attr("x",x)
  .attr("y",y)
  .attr("fill", color);
}

export const urlBall = "https://c1.klipartz.com/pngpicture/135/703/sticker-png-soccer-ball-football-sports-own-goal-symbol-sports-equipment-pallone-circle.png"

const drawImage = (w,h,x,y,svg) => {
  svg.append("image")
  .attr("width",w)
  .attr("height",h)
  .attr("x",x)
  .attr("y",y)
  .attr("href",urlBall)
}

let values = Object.values(futbol);
keys.forEach((key,index)=>{
  drawRect(20, values[index], x_axis(key)+10, 100-values[index], "#4EC749FF", svg);
  drawImage(20, 20, x_axis(key)+10, 100-values[index]-20, svg)
});