import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance, if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Register datalabels plugin
    Chart.register(ChartDataLabels);

    // Create new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6",
          "Data 7", "Data 8", "Data 9", "Data 10", "Data 11", "Data 12",
          "Data 13", "Data 14", "Data 15", "Data 16", "Data 17", "Data 18"
        ],
        datasets: [
          {
            label: "Data",
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => value // Custom tick label format
            }
          }
        },
        plugins: {
          datalabels: {
            display: false // Hide the labels inside the bars
          }
        },
        maintainAspectRatio: false // Prevent chart resizing on hover
      }
    });

    // Clean up on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
