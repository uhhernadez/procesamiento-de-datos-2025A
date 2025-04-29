import {select, geoEqualEarth, geoMercator, geoPath, json} from "https://esm.run/d3";

const svg = select("#app")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);

//const projection = geoEqualEarth().center([-100.963, 22.185]).scale(1000).translate([0, 1000]);
const projection = geoMercator().center([-95.963, 22.185, ]).scale(2000);

const geoGenerator = geoPath().projection(projection);
const urlSanLuisPotosi = "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/refs/heads/main/2023/states/San%20Luis%20Potos%C3%AD.json";
const urlZacatecas = "https://raw.githubusercontent.com/PhantomInsights/mexico-geojson/refs/heads/main/2023/states/Zacatecas.json";
const state = await json(urlZacatecas);
console.log(state.features)
svg.append("g")
    .selectAll("path")
    .data(state.features)
    .enter()
    .append("path")
    .attr("d", geoGenerator)
    .attr("fill","#000000")
    .attr("stroke", "#FFFFFF")
