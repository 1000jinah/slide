import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance, if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Data",
            data: [10, 20, 30, 25, 40, 35],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            tension: 0.3, // Adjust the line curve
            // fill: true // Fill the area under the line
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value, // Custom tick label format
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          datalabels: {
            display: false // Hide the labels inside the bars
          }
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
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
