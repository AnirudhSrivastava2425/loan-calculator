import { Pie,Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({principal,interest}) => {
    const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Loan Breakdown",
        data: [principal, interest],
        backgroundColor: [
          "rgb(62, 153, 214)",
          "#00589C",
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <Doughnut data={data}/>
  )
}

export default PieChart