import {select, scaleOrdinal, pie, arc} from "https://esm.run/d3";
const svg = select("#app")
            .append("svg")
            .append("g")
            .attr("transform","translate(100, 100)"); 
svg.attr("width", 300);
svg.attr("height", 300);

const data = { a: 9, b: 20, c: 30, d: 2, e: 13 };

const color = scaleOrdinal()
.range(["#731DD8", "#48A9A6", "#E4DFDA", "#D4B483",  "#C1666B"]);
const pieObj = pie().value((d) => d[1] );
const pie_data = pieObj(Object.entries(data));

pie_data.forEach((data,index) => {
  console.log(data);
  const objArc = arc()
  .innerRadius(10)
  .outerRadius(50)
  .startAngle(data.startAngle)
  .endAngle(data.endAngle)
  
  svg.append("path")
  .attr("d", objArc)
  .attr("fill", color(index))
  .attr("stroke", "black")
  .attr("stroke-width", 1);
});