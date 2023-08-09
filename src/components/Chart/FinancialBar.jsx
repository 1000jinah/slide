import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const FinancialBar = () => {
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
        labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Data",
            data: [4, 4.5, 5, 6, 14, 15],
            backgroundColor: "rgba(75, 192, 192, 0.2)"
          }
        ]
      },
      options: {
        scales: {
          x: {
            ticks: {
              display: true, // Show the x-axis ticks
              color: "#000000",
              zeroLineColor: "transparent" // Remove the zero line color
            },
            grid: {
              display: true,
              color: "transparent", // Remove the x-axis grid lines
              borderColor: "transparent" // Remove the remaining x-axis line
            },
            zeroLineWidth: 0 // Remove the zero line
          },
          y: {
            display: false, // Hide the y-axis
            grid: {
              display: false // Hide the y-axis grid lines
            }
          }
        },
        plugins: {
          tooltip: {
            enabled: false // Disable tooltips
          },
          legend: {
            display: false // Hide the legend
          },
          datalabels: {
            anchor: "end",
            align: "center",
            offset: 0,
            color: "#000000",
            formatter: (value) => value + "M" // Add the "M" text to the data value
          }
        },
        elements: {
          bar: {
            borderWidth: 0, // Remove the borders around the bars
            borderRadius: 9 // Apply border radius to the bars
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

export default FinancialBar;
