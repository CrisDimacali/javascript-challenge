  
// from data.js
var tableData = data;
var tbody = d3.select("#table-body");
// Select the form
var button = d3.select("#filter-btn");
var form = d3.select("#date-form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Displaying the full table 
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}


function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Empty the table body for every runEvent
  tbody.html("")
  // Select the input element and get the raw HTML node
  var datetime = d3.select("#datetime");
  var city = d3.select("#city");
  var state = d3.select("#state");
  var country = d3.select("#country");
  var shape = d3.select("#shape");

  
  // Get the value property of the input element
  var DateValue = datetime.property("value");
  var CityValue = city.property("value");
  var StateValue = state.property("value");
  var CountryValue = country.property("value");
  var ShapeValue = shape.property("value");
  //Assiging the table data to a variable
//   var filteredData = tableData;
  // checking if the input field is true.
  if (DateValue){
  var tableData = tableData.filter(tableData => tableData.datetime === DateValue); 
  }
  if (CityValue){
    var tableData = tableData.filter(tableData => tableData.city === CityValue); 
  }
  if (StateValue){
    var tableData = tableData.filter(tableData => tableData.state === StateValue);
  }
  if (CountryValue){
    var tableData = tableData.filter(tableData => tableData.country === CountryValue);
  } 
  if (ShapeValue){
    var tableData = tableData.filter(tableData => tableData.shape === ShapeValue); 
  }
  //Use d3 to update each cell's text with filtered values 
  tableData.forEach((rowData) => {
    var row = tbody.append("tr");
    Object.entries(rowData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
};
//calling the init function
displayData(data);
