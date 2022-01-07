import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: 'top',
        display: false,
      },
    //   title: {
    //     display: true,
    //     text: 'Chart.js Line Chart',
    //   },
    },
  };
  
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December",
  ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
            2000,
            1200,
            3950,
            2950,
            5600,
            4050,
            1950,
            4450,
            4850,
            4900,
            6100,
          ],
        borderColor: 'rgb(219,77,96)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    //   {
    //     label: 'Dataset 2',
    //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //     borderColor: 'rgb(53, 162, 235)',
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    ],
  };
const LineChart = () => {
    return (
        <Line options={options} data={data} />
    )
}

export default LineChart
