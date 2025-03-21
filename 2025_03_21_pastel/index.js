import {select} from "https://esm.run/d3";
const svg = select("#app")
            .append("svg")
            .append("g")
            .attr("transform","translate(30, 10)"); 

            svg.attr("width", window.innerWidth);
svg.attr("height", window.innerHeight);
