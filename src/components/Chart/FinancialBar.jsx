import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const FinancialBar = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

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
              display: true,
              color: "#000000",
              zeroLineColor: "transparent"
            },
            grid: {
              display: true,
              color: "transparent",
              borderColor: "transparent"
            },
            zeroLineWidth: 0
          },
          y: {
            display: false,
            grid: {
              display: false
            }
          }
        },
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false
          },
        },
        elements: {
          bar: {
            borderWidth: 0,
            borderRadius: 9
          }
        },
        maintainAspectRatio: false
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default FinancialBar;
