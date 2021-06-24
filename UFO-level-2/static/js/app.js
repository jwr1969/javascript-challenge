// from data.js
var tableData = data;

// Create a table from the data.js file
// get a reference to the table body
var tbody = d3.select("tbody");

// Take an date input from the Filter Search input field

var filterTable = d3.select("#filter-btn")

filterTable.on("click", runFilter);

function runFilter() {
    d3.selectAll("tr").remove()
    d3.selectAll("td").remove()
    
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    console.log(inputValue)
    data.forEach((sighting) => {
        if (Date.parse(sighting.datetime) === Date.parse(inputValue)) {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                // add a new cell to the row
                var cell = row.append("td");
                // place the value into that cell
                cell.text(value);

            });
        };
    });
};


// d3.event.preventDefault();
