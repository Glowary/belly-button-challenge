<p align="center">
  <h1>
  Belly Button Biodiversity Dashboard
  </h1>
</p>

This dashboard lets you explore the Belly Button Biodiversity dataset and make a list of the microbes that live in people's navels. D3.js and Plotly.js are used in this project to make an interactive dashboard for exploring the Belly Button Biodiversity dataset. The dashboard has a dropdown menu for choosing specific test subjects, a horizontal bar chart showing the top 10 OTUs, a bubble chart showing each sample, and a panel showing demographic data.  

<p align="center">
  <img src="https://github.com/Glowary/belly-button-challenge/blob/main/images/dashboard.png?raw=true" alt="drawing" width="500"/>
</p>

### Bar Chart

The `updateBarChart` function updates the horizontal bar chart. It uses the top 10 sample values as values, OTU IDs as labels, and OTU labels as tooltips. The chart updates when a new sample is selected.

<p align="center">
  <img src="https://github.com/Glowary/belly-button-challenge/blob/main/images/barchart.png?raw=true" alt="drawing" width="500"/>
</p>

### Bubble Chart

The `updateBubbleChart` function updates the bubble chart. It uses OTU IDs for x values, sample values for y values, sample values for marker size, OTU IDs for marker colors, and OTU labels for text values. The chart updates when a new sample is selected.

<p align="center">
  <img src="https://github.com/Glowary/belly-button-challenge/blob/main/images/bubblechart.png?raw=true" alt="drawing"/>
</p>

### Demographic Info

The `updateDemographicInfo` function updates the panel displaying demographic information. It updates when a new sample is selected.  

<p align="center">
  <img src="https://github.com/Glowary/belly-button-challenge/blob/main/images/demographic.png?raw=true" alt="drawing" height="500"/>
</p>  

[append](https://stackoverflow.com/questions/43121679/how-to-append-option-into-select-combo-box-in-d3), [entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
