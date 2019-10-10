var Names = ["string1", "string2", "string3"];

var namesAppend = function(){
   d3.select("#A1").append("p").text(Names); 
    
}

namesAppend();

var pAppend = function(d){

    d3.select("#A2")
        .selectAll("span")
        .data(d)
        .enter()
        .append("span")
        .text(function(d){
        return d
    });
};
pAppend(Names);

var planetPromise=d3.json("planets.json");

planetPromise.then(
function(d)
{
    drawPlanets(d);
    planetNames(d);
    makeTable(d);
    makeTableC2(d);
    makeTableC3(d);
    
    console.log("works", d);
    
},
    function(err){
    console.log("broke",err);
    }
);

var drawPlanets = function (d){
    var pDiv = d3.select("#B3");
    pDiv.selectAll("img")
        .data(d)
        .enter()
        .append("img")
        .attr("src",function(d){
        return d.img
    });
};

var makeOl = function(){
    d3.select("#B4").append("ol").attr("id", "nameslist");
};

var planetNames = function (d) {
    makeOl();
    var pOl = d3.select("#nameslist");
    pOl
        .selectAll("li")
        .data(d)
        .enter()
        .append("li")
        .text(function(d){return d.name});
    

    
};

var makeTable = function (d){
    d3.select("#C1")
        .append("table")
        .attr("id", "elementTable");
    d3.select("#elementTable")
    .selectAll("tr")
        .data(d)
        .enter()
        .append("tr")
};

var makeTableC2 = function(d){
    d3.select("#C2")
        .append("table")
        .attr("id", "nameTable");
    d3.select("#nameTable")
        .selectAll("tr")
        .data(d)
        .enter()
        .append("tr")
        .attr("class", "nameColumn");
    d3.selectAll(".nameColumn")
        .append("td")
        .text(function(d){return d.name});
};

var makeTableC3 = function(d) {
    d3.select("#C3")
        .append("table")
        .attr("id", "totalTable");
   d3.select("#totalTable")
        .append("thead")
        .attr("id", "totalThead");
    d3.select("#totalTable")
        .append("tbody")
        .attr("id", "totalTbody");
    d3.select("#totalThead")
        .append("th")
        .text("Planet Name");
    d3.select("#totalThead")
        .append("th")
        .text("Planet Image");
    d3.select("#totalThead")
        .append("th")
        .text("Distance from Sun (AU)");
    d3.select("#totalThead")
        .append("th")
        .text("Radius Ratio to Earth");
    d3.select("#totalThead")
        .append("th")
        .text("Planet Density (g/cm^3)");
    d3.select("#totalThead")
        .append("th")
        .text("Number of Moons");
    d3.select("#totalTbody")
        .selectAll("tr")
        .data(d)
        .enter()
        .append("tr")
        .attr("class", "rows");
    d3.selectAll(".rows")
        .append("td")
        .text(function(d){return d.name});
    d3.selectAll(".rows")
        .append("td")
        .attr("class", "picColumn");
    d3.selectAll(".picColumn")
        .append("img")
        .attr("src", function(d){return d.img});
    d3.selectAll(".rows")
        .append("td")
        .text(function(d){return d.distance});
    d3.selectAll(".rows")
        .append("td")
        .text(function(d){return d.radius});
    d3.selectAll(".rows")
        .append("td")
        .text(function(d){return d.density});
    d3.selectAll(".rows")
        .append("td")
        .text(function(d){return d.moons});
    
    
}

