// import Footer from "src/components/Footer";
import { Grid } from "@mui/material";
import PageHeader from "./PageHeader";
import FundPicker from "./FundPicker";
import PortfolioCharts from "./PortfolioCharts"
import PortfolioStats from "./PortfolioStats"

function Portfolios() {
  const funds = [
    "ADISK",
    "ARKG",
    "DSU",
    "FRA",
    "BHK",
    "QQQ",
    "SMH",
    "IGV",
    "XBI",
    "XLV",
    "XLF",
    "XLI",
    "ICLN",
    "IYT",
    "XLB",
    "IEMG",
    "IEFA",
    "EUFN",
    "VYM",
    "MUB",
    "MBB",
    "IEF",
    "TIP",
    "LQD",
    "KBWB",
    "VNQ",
    "GLD",
    "SLV",
    "FCX",
    "GBTC",
    "CASHX",
  ];


  return (
    <>
      <PageHeader />
      <Grid
        sx={{
          px: 4,
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
          >
            <Grid item xs={12}>
              <FundPicker funds={funds}/>
            </Grid>
            <Grid item xs={12}>
              <PortfolioStats />
            </Grid>
            <Grid item xs={12}>
              <PortfolioCharts />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Portfolios;
