import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const VerticalBarChart = ({ labels, data, backgroundColors }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const barWidth = 1.2 / data.length;

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: data.map((dataset, index) => ({
          data: dataset,
          backgroundColor: backgroundColors[index] || "#c8cacc",
          borderWidth: 0,
          barPercentage: barWidth,
        })),
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            maxTicksLimit: 7,
            ticks: {
              callback: (value) => `${value}`,
            },
            grid: {
              color: "#c8cacc",
              tickColor: "#c8cacc",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
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
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [labels, data, backgroundColors]);

  return <canvas ref={chartRef} />;
};

export default VerticalBarChart;
