import { Container, Grid } from "@material-ui/core";
import Order from "./components/Order";
import Search from "./components/Search";
import AskingPrice from "./components/AskingPrice";
import ItemChart from "./components/ItemChart";
import CurrentPrice from "./components/CurrentPrice";

const Trade = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} lg={2}>
          <Search />
        </Grid>
        <Grid item xs={12} lg={10}>
          <Grid container>
            <Grid item xs={12} lg={12} style={{ backgroundColor: "#ff2fff" }}>
              <CurrentPrice />
            </Grid>
            <Grid item xs={12} lg={12}>
              <ItemChart />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AskingPrice />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Order />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Trade;
