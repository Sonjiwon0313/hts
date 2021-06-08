import React from "react";
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

type ColumnType = {
  id: string;
  label: string;
};

type PastTradePriceType = {
  price: number;
  percent: number;
};

type RowType = {
  [key: string]: string | number | PastTradePriceType;
};

const columns: ColumnType[] = [
  { id: "name", label: "종목명" },
  { id: "currentPrice", label: "현재가" },
  { id: "pastPrice", label: "전일 대비" },
];

const rows: RowType[] = [
  {
    name: "삼성전자",
    currentPrice: "10000",
    pastPrice: {
      price: 10000,
      percent: 10,
    },
  },
  {
    name: "국민은행",
    currentPrice: "20000",
    pastPrice: {
      price: 20000,
      percent: 20,
    },
  },
  {
    name: "LG",
    currentPrice: "30000",
    pastPrice: {
      price: 30000,
      percent: 30,
    },
  },
  {
    name: "기아",
    currentPrice: "40000",
    pastPrice: {
      price: 40000,
      percent: 40,
    },
  },
  {
    name: "한화",
    currentPrice: "50000",
    pastPrice: {
      price: 50000,
      percent: 50,
    },
  },
  {
    name: "기업은행",
    currentPrice: "60000",
    pastPrice: {
      price: 60000,
      percent: 60,
    },
  },
  {
    name: "농협",
    currentPrice: "70000",
    pastPrice: {
      price: 70000,
      percent: 70,
    },
  },
  {
    name: "코레일",
    currentPrice: "80000",
    pastPrice: {
      price: 80000,
      percent: 80,
    },
  },
  {
    name: "삼성증권",
    currentPrice: "90000",
    pastPrice: {
      price: 90000,
      percent: 90,
    },
  },
  {
    name: "SKT",
    currentPrice: "100000",
    pastPrice: {
      price: 100000,
      percent: 100,
    },
  },
];

const Search = () => {
  return (
    <Box>
      <Box>
        <TextField variant="outlined" margin="dense" placeholder="종목명" fullWidth />
      </Box>
      <Box>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.toString()}>
                    {columns.map((column: ColumnType) => {
                      if (column.id === "pastPrice") {
                        const pastPrice = row[column.id] as PastTradePriceType;
                        return (
                          <TableCell key={column.id}>
                            {pastPrice.price}
                            <br />
                            {pastPrice.percent}%
                          </TableCell>
                        );
                      }
                      const value = row[column.id] as string | number;
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Search;
