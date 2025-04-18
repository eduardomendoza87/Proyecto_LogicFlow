// src/components/GraficaRendimiento.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const GraficaRendimiento = () => {
  const data = {
    labels: [
      "Evaluación 1",
      "Actividad 2",
      "Evaluación 3",
      "Parcial",
      "Final",
    ],
    datasets: [
      {
        label: "Calificación",
        data: [8.5, 9, 8, 9.5, 10],
        fill: false,
        borderColor: "#A0522D", // caféPersonalizado
        backgroundColor: "#A0522D",
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000",
          font: { size: 14, weight: "bold" },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1,
          color: "#333",
        },
      },
      x: {
        ticks: {
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="bg-blancoPersonalizado p-6 rounded-lg shadow mb-12">
      <h2 className="text-xl font-bold text-center mb-4 text-negroPersonalizado">
        Gráfica de Rendimiento Académico
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default GraficaRendimiento;
