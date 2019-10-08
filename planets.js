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
    d3.select("#C1").append("table").attr("id", "elementTable");
    d3.select("#elementTable").selectAll("tr").data(d).enter().append("tr");
};
