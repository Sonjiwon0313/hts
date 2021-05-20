import { Box, Tabs, Tab } from "@material-ui/core";

type OrderSellType = {
  index: number;
  value: number;
};
const OrderSell = (props: OrderSellType) => {
  const { index, value } = props;
  return <Box hidden={index !== value}>매도</Box>;
};

export default OrderSell;
