// Define the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data){
    console.log(data);
});

// Function to initialize the dashboard
function init() {
  // Use D3 to read the samples.json file
  d3.json(url).then(function(data) {
    // Populate the dropdown menu with test subject IDs
    var dropdownMenu = d3.select("#selDataset");
    
    data.names.forEach(function(name) {
      dropdownMenu.append("option").text(name).property("value", name);
    });

    // Use the first test subject ID to initialize the page
    var initialSubject = data.names[0];
    updateCharts(initialSubject);
  });
}


// Function to update the bar chart
function updateBarChart(data) {

    // Select the element to create/update the bar chart
    var barChart = d3.select("#bar");

    // Clear any existing content
    barChart.html("");
  
    // Get the top 10 OTUs
    var topTenValues = data.sample_values.slice(0, 10).reverse();
    var topTenLabels = data.otu_ids.slice(0, 10).reverse();
    var topTenHoverText = data.otu_labels.slice(0, 10).reverse();

    // Create the bar chart using plotly
    var trace = {
      x: topTenValues,
      y: topTenLabels.map(id => `OTU ${id}`),
      text: topTenHoverText,
      type: "bar",
      orientation: "h"
    };
  
    var layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU IDs" }
    };
  
    Plotly.newPlot("bar", [trace], layout);
  }


// Function to update the bubble chart
function updateBubbleChart(data) {
    var bubbleChart = d3.select("#bubble");
    bubbleChart.html("");

    // Create the bubble chart using plotly
    var trace = {
      x: data.otu_ids,
      y: data.sample_values,
      text: data.otu_labels,
      mode: "markers",
      marker: {
        size: data.sample_values,
        color: data.otu_ids
      }
    };
  
    var layout = {
      title: "Bubble Chart",
      xaxis: { title: "OTU IDs" },
      yaxis: { title: "Sample Values" }
    };
  
    Plotly.newPlot("bubble", [trace], layout);
  }
  
  
// Function to update the demographic info
function updateDemographicInfo(selectedSubject) {

    // Use D3 to select the panel body
    var panelBody = d3.select("#sample-metadata");

        // Filter the data for the selected test subject's metadata
        var metadata = data.metadata.filter(function(meta) {
          return meta.id == selectedSubject;
        })[0];
  
        // Clear existing metadata
        panelBody.html("");
  
        // Update the demographic info panel with key-value pairs
        Object.entries(metadata).forEach(function([key, value]) {
          panelBody.append("p").text(`${key}: ${value}`);
        });
      };


  // Function to update the demographic info
function updateDemographicInfo(selectedSubject) {
    // Use D3 to select the panel body
    var panelBody = d3.select("#sample-metadata");
    panelBody.html("");
  
    // Use D3 to read the samples.json file
    d3.json(url).then(function(data) {
      // Filter the data for the selected test subject's metadata
      var metadata = data.metadata.filter(function(meta) {
        return meta.id == selectedSubject;
      })[0];
  
      // Update the demographic info panel with key-value pairs
      Object.entries(metadata).forEach(function([key, value]) {
        panelBody.append("p").text(`${key}: ${value}`);
      });
    });
  }
  
  
// Function to update all charts when a new sample is selected
function updateCharts(selectedSubject) {
    // Use D3 to read the samples.json file
    d3.json(url).then(function(data) {
      // Filter the data for the selected test subject
      var selectedData = data.samples.filter(function(sample) {
        return sample.id === selectedSubject;
      })[0];
  
      // Update the bar chart
      updateBarChart(selectedData);
  
      // Update the bubble chart
      updateBubbleChart(selectedData);
  
      // Update the demographic info
      updateDemographicInfo(selectedSubject);
    });
  }
  

// Initialize the dashboard
init();