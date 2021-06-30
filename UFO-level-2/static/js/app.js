// from data.js
var tableData = data;

// Create empty arrays to hold unique values for each drop down
var city = []
var country = []
var shape = []
var dateTime = []
var state = []

// Populate arrays of unique entries for each filterable field
data.forEach((sighting) =>  {
    Object.entries(sighting).forEach(([key, value]) =>  {
        if ((key === "city") & !city.includes(value)) {
            city.push(value)
        }   else {};
        if ((key === "country") & !country.includes(value)) {
            country.push(value)
        }   else {};
        if ((key === "shape") & !shape.includes(value)) {
            shape.push(value)
        }   else {};
        if ((key === "state") & !state.includes(value)) {
            state.push(value)
        }   else {};
        if ((key === "datetime") & !dateTime.includes(value)) {
            dateTime.push(value)
        }   else {};
    });
});

// Create a drop down lists (in HTML) from available values
var dateTimeDropdown = d3.select("#datalistDateTime")
dateTime.forEach((entry) => {
    var listEntry = dateTimeDropdown.append("option");
    listEntry.text(entry);
});
var cityDropdown = d3.select("#datalistCities")
city.forEach((entry) => {
    var listEntry = cityDropdown.append("option");
    listEntry.text(entry);
});
var shapeDropdown = d3.select("#datalistShapes")
shape.forEach((entry) => {
    var listEntry = shapeDropdown.append("option");
    listEntry.text(entry);
});
var stateDropdown = d3.select("#datalistStates")
state.forEach((entry) => {
    var listEntry = stateDropdown.append("option");
    listEntry.text(entry);
});
var countryDropdown = d3.select("#datalistCountries")
country.forEach((entry) => {
    var listEntry = countryDropdown.append("option");
    listEntry.text(entry);
});

// get a reference to the table body
var tbody = d3.select("tbody");
// assign a variable to the filter table button
var filterTable = d3.select("#filter-btn")
// listen for filter table button click
filterTable.on("click", runFilter);
// function to collect inputs and build a table based on those inputs
function runFilter() {
    // Remove the table created by the last query
    d3.selectAll("tbody>tr").remove()
    // assign variables to inputs in each of the search fields
    var inputdateTime = d3.select("#datetime").property("value");
    var inputcity = d3.select("#city").property("value");
    var inputshape = d3.select("#shape").property("value");
    var inputstate = d3.select("#state").property("value");
    var inputcountry = d3.select("#country").property("value");
    
    // filter to determine to select a sighting
    data.forEach((sighting) => {
        
        if ((Date.parse(sighting.datetime) === Date.parse(inputdateTime)) || (inputdateTime === "") && 
            ((sighting.city === inputcity) || (inputcity === "")) &&
            ((sighting.shape === inputshape) || (inputshape === "")) &&
            ((sighting.state === inputstate) || (inputstate === "")) &&
            ((sighting.country === inputcountry) || (inputcountry === ""))
            ) 
            {
            // table build
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
            // add a new cell to the row
                var cell = row.append("td");
            // place the value into that cell
                cell.text(value);
            })
        }
        else {}
    
    });
};








