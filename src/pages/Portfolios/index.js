// import Footer from "src/components/Footer";
import { Grid } from "@mui/material";
import PageHeader from "./PageHeader";
import RegionETF from "../../components/RegionETF/RegionETF";
import ETF from "../ETF"
import ShortTerm from "../../components/SmallCharts/ShortTerm"

function Portfolios() {
  return (
    <>
      <PageHeader />
      <Grid
        sx={{
          mt: 2,
          px: 4,
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <ShortTerm />
        </Grid>
        <Grid item lg={7} md={6} xs={12}>
          <ETF />
        </Grid>
        <Grid item lg={5} md={6} xs={12}>
          <RegionETF />
        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item md={6} lg={5} xs={12}></Grid>
        <Grid item md={6} lg={7} xs={12}></Grid>
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Portfolios;
