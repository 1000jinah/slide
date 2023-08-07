import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const VerticalBarChart = ({ labels, data, backgroundColors }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance, if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Register datalabels plugin
    Chart.register(ChartDataLabels);

    // Calculate the bar width based on the number of datasets
    const barWidth = 1.2 / data.length; // Adjust the bar width percentage

    // Create new chart instance
    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: data.map((dataset, index) => ({
          data: dataset,
          backgroundColor: backgroundColors[index] || "#c8cacc", // Transparent background color
          borderWidth: 0, // Remove the border around the chart area
          barPercentage: barWidth, // Set the bar width dynamically
        })),
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            maxTicksLimit: 7, // Set max tick count to 7

            ticks: {
              callback: (value) => `${value}`, // Custom tick label format
            },
            grid: {
              color: "#c8cacc",
              tickColor: "#c8cacc",
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          datalabels: {
            anchor: "end",
            align: "end",
            offset: 2,
            color: "#636973", // Set the value color to black
            formatter: (value) => value, // Display the value on top of the bar
          },
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 0,
            right: 0,
          },
        },
        maintainAspectRatio: false, // Prevent chart resizing on hover
      },
    });

    // Clean up on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [labels, data, backgroundColors]);

  return <canvas ref={chartRef} />;
};

export default VerticalBarChart;
