import {select, scaleBand, scaleLinear, axisBottom, axisLeft, easeElasticOut} from "https://esm.run/d3";

export function drawBarChart(label) {
const svg = select("#" + label)
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
  return svg.append("rect")
            .attr("width",w)
            .attr("height",h)
            .attr("x",x)
            .attr("y",y)
            .attr("fill", color);
}

const urlBall = "https://c1.klipartz.com/pngpicture/135/703/sticker-png-soccer-ball-football-sports-own-goal-symbol-sports-equipment-pallone-circle.png"

const drawImage = (w,h,x,y,svg) => {
  return svg.append("image")
  .attr("width",w)
  .attr("height",h)
  .attr("x",x)
  .attr("y",y)
  .attr("href",urlBall)
}

let values = Object.values(futbol);
keys.forEach((key,index)=>{
  const r = drawRect(20, 
                    values[index], 
                    0, 
                    100-values[index], 
                    "#4EC749FF", 
                    svg);
  r.transition()
  .duration(2000)
  .attr("x", x_axis(key)+10)
  .attr("fill", "#FF0000")
 
  const x = x_axis(key)+10;
  const y = 100-values[index]-20;
  const img = drawImage(20, 20, x , 20, svg)
//  img.transition()
//  .duration(2000)
//  .ease(easeElasticOut.amplitude(2).period(0.5))
//  .attr("y", y)
 
  const rotacion = "rotate(180 ," + (x+10) + ", " + (20) + ")";
  console.log(rotacion)
  img.transition()
    .delay(2500)
    .duration(2000)
    .attr("transform", rotacion)

  svg.append("circle")
      .attr("r",5)
      .attr("cx",x+10)
      .attr("cy",20)

  });



}
