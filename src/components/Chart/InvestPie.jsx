import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext("2d");

    if (chartInstanceRef.current) {
      // If a chart instance already exists, destroy it before creating a new one
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            enabled: false, // Disable tooltip
          },
        },
        elements: {
          arc: {
            borderWidth: 0, // Remove the border
          },
        },
      },
    });

    // Clean up and destroy the chart when the component unmounts
    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [data]);

  useEffect(() => {
    if (chartInstanceRef.current) {
      // Calculate the maximum data value
      let maxDataValue = 0;
      if (data.datasets && data.datasets.length > 0) {
        data.datasets.forEach((dataset) => {
          if (dataset.data && dataset.data.length > 0) {
            const datasetMax = Math.max(...dataset.data);
            maxDataValue = Math.max(maxDataValue, datasetMax);
          }
        });
      }

      // Calculate the container size based on the maximum data value
      const containerSize = Math.ceil(Math.sqrt(maxDataValue)) * 10; // Adjust the multiplier as needed

      // Update the chart container size
      const chartContainer = chartRef.current.parentElement;
      chartContainer.style.width = `${containerSize}px`;
      chartContainer.style.height = `${containerSize}px`;
    }
  }, [data]);

  return (
    <div className="chart-container" style={{margin:"50px"}}>
      <canvas ref={chartRef} />
    </div>
  );
};

const InvestPie = () => {
  const chartData = [
    {
      datasets: [
        {
          data: [300],
          backgroundColor: ["#e2e4e6"],
        },
      ],
    },
    // Add data for other periods
    {
      datasets: [
        {
          data: [100],
          backgroundColor: ["#e2e4e6"],
        },
      ],
    },
    {
      datasets: [
        {
          data: [470],
          backgroundColor: ["#c8cacc"],
        },
      ],
    },
    {
      datasets: [
        {
          data: [30],
          backgroundColor: ["#e2e4e6"],
        },
      ],
    },
  ];

  return (
    <div
      className="chart-container"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",

        justifyContent: "space-evenly",
      }}
    >
      {chartData.map((data, index) => (
        <div key={index} className="chart-item">
          <PieChart data={data} />
        </div>
      ))}
    </div>
  );
};

export default InvestPie;
