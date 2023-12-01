## Belly Button Biodiversity Dashboard

This dashboard lets you explore the Belly Button Biodiversity dataset and make a list of the microbes that live in people's navels. D3.js and Plotly.js are used in this project to make an interactive dashboard for exploring the Belly Button Biodiversity dataset. On the dashboard, there is a dropdown menu for choosing specific test subjects, a horizontal bar chart showing the top 10 OTUs, a bubble chart showing each sample, and a panel showing demographic data.  

<img src="https://github.com/Glowary/belly-button-challenge/blob/main/images/dashboard.png?raw=true" alt="drawing" width="500"/>

### Bar Chart

The `updateBarChart` function updates the horizontal bar chart. It uses the top 10 sample values as values, OTU IDs as labels, and OTU labels as tooltips. The chart updates when a new sample is selected.

<img src="https://github.com/Glowary/belly-button-challenge/blob/main/images/barchart.png?raw=true" alt="drawing" width="500"/>

### Bubble Chart

The `updateBubbleChart` function updates the bubble chart. It uses OTU IDs for x values, sample values for y values, sample values for marker size, OTU IDs for marker colors, and OTU labels for text values. The chart updates when a new sample is selected.

![](https://github.com/Glowary/belly-button-challenge/blob/main/images/bubblechart.png?raw=true)

### Demographic Info

The `updateDemographicInfo` function updates the panel displaying demographic information. It updates when a new sample is selected.
![](https://github.com/Glowary/belly-button-challenge/blob/main/images/demographic.png?raw=true)
