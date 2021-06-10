import { Box, Container, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const CurrentPrice = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Typography variant="h6">SK텔레콤</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography variant="h5" color="primary">
              150,000원
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">전일대비</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Grid container>
            <Grid item xs={6}>
              <Box>고가</Box>
              <Divider />
              <Box>저가</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>거래량</Box>
              <Divider />
              <Box>거래량</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentPrice;
