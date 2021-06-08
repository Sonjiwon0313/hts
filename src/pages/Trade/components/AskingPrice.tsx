import { Box } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BorderColor } from "@material-ui/icons";

type RowType = {
  price: number;
  percent: number;
  dataSet: DataType;
};

type DataSetType = {
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

type DataType = {
  labels: string[];
  datasets: DataSetType[];
};

const increaseAskPrices: RowType[] = [
  {
    price: 100000,
    percent: 10,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-1],
          backgroundColor: ["rgba(54,162,235,0.2)"],
          borderColor: ["rgba(54,162,235,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 200000,
    percent: 20,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-2],
          backgroundColor: ["rgba(54,162,235,0.2)"],
          borderColor: ["rgba(54,162,235,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 300000,
    percent: 30,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-3],
          backgroundColor: ["rgba(54,162,235,0.2)"],
          borderColor: ["rgba(54,162,235,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 400000,
    percent: 40,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-4],
          backgroundColor: ["rgba(54,162,235,0.2)"],
          borderColor: ["rgba(54,162,235,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 500000,
    percent: 50,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [-5],
          backgroundColor: ["rgba(54,162,235,0.2)"],
          borderColor: ["rgba(54,162,235,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
];
const decreaseAskPrices: RowType[] = [
  {
    price: 600000,
    percent: -60,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [6],
          backgroundColor: ["rgba(255,99,132,0.2)"],
          borderColor: ["rgba(255,99,132,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 700000,
    percent: -70,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [7],
          backgroundColor: ["rgba(255,99,132,0.2)"],
          borderColor: ["rgba(255,99,132,1)"],
          borderWidth: 1,
        },
      ],
    },
  },

  {
    price: 800000,
    percent: -80,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [8],
          backgroundColor: ["rgba(255,99,132,0.2)"],
          borderColor: ["rgba(255,99,132,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 900000,
    percent: -90,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [9],
          backgroundColor: ["rgba(255,99,132,0.2)"],
          borderColor: ["rgba(255,99,132,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 100000,
    percent: -10,
    dataSet: {
      labels: [""],
      datasets: [
        {
          data: [1],
          backgroundColor: ["rgba(255,99,132,0.2)"],
          borderColor: ["rgba(255,99,132,1)"],
          borderWidth: 1,
        },
      ],
    },
  },
];

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(153,102,255,0.2)",
        "rgba(255,159,64,0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
        "rgba(75,192,192,1)",
        "rgba(153,102,255,1)",
        "rgba(255,159,64,1)",
      ],
      borderWidth: 1,
    },
  ],
};
const increaseOptions = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      min: -30,
      max: 0,
      ticks: {
        display: false,
        stepSize: 5,
      },
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        display: false,
      },
    },
  },
};
const decreaseOptions = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false, drawBorder: false },
      min: 0,
      max: 30,
      ticks: {
        display: false,
        stepSize: 5,
      },
    },
    y: {
      grid: { display: false, drawBorder: false },
      ticks: {
        display: false,
      },
    },
  },
};

const AskingPrice = () => {
  return (
    <Box>
      <TableContainer>
        <Table size="small">
          <TableHead></TableHead>
          <TableBody>
            {increaseAskPrices.map((row: RowType) => {
              return (
                <TableRow key={row.price}>
                  <TableCell>
                    <Box width="90px" height="20px">
                      <Bar type="" data={row.dataSet} options={increaseOptions} />
                    </Box>
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
            {decreaseAskPrices.map((row: RowType) => {
              return (
                <TableRow key={row.price}>
                  <TableCell></TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell>
                    <Box width="90px" height="20px">
                      <Bar type="" data={row.dataSet} options={decreaseOptions} />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AskingPrice;
