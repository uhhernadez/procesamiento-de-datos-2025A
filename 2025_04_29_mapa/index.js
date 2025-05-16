import {select, geoEqualEarth, geoMercator, geoPath, json} from "https://esm.run/d3";

const svg = select("#app")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

//const projection = geoEqualEarth().center([-89.963, 15.185, ]).scale(2000);
const projection = geoMercator().center([-89.963, 15.185, ]).scale(2000);

const geoGenerator = geoPath().projection(projection);
const urlSanLuisPotosi = "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/refs/heads/main/2023/states/San%20Luis%20Potos%C3%AD.json";
const urlZacatecas = "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/refs/heads/main/2023/states/Zacatecas.json";
const urlOaxaca = "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/refs/heads/main/2023/states/Oaxaca.json";
const urlGuanajuato = "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/refs/heads/main/2023/states/Guanajuato.json";

const state = await json(urlOaxaca);
projection.fitExtent([[0, 0], [500, 500]], state); 


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

console.log(state.features[0].properties.NOMGEO);
svg.append("g")
    .selectAll("path")
    .data(state.features)
    .enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("fill","#000000")
    .attr("stroke", "#FFFFFF")
    .on("mouseover" , (event, feature) => {
      tooltip.style("opacity", 1)
      console.log(feature.properties.NOMGEO)
    })
    .on("mousemove", (event, feature) => {
      tooltip
        .html(feature.properties.NOMGEO)
        .style("left", (event.x) + "px")
        .style("top", (event.y) + "px")
    })
    .on("mouseleave", (event, feature) => {
      tooltip.style("opacity", 0)
    });


