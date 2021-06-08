import { Box } from "@material-ui/core";
import { ChartCanvas, Chart, last, XAxis, YAxis, CandlestickSeries } from "react-financial-charts";
import { scaleTime } from "d3-scale";
import data, { DataType } from "../data";

const xAccessor = (d: DataType) => d.date;
const xExtents = [xAccessor(last(data)), xAccessor(data[data.length - 80])];

const ItemChart = () => {
  return (
    <Box>
      <ChartCanvas
        height={400}
        width={950}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        ratio={1}
        seriesName="sss"
        data={data}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
      >
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={3} />
        </Chart>
      </ChartCanvas>
    </Box>
  );
};

export default ItemChart;
