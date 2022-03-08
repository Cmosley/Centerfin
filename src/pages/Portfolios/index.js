// import Footer from "src/components/Footer";
import { Grid } from "@mui/material";
import { useFormik } from "formik";

import FundPicker from "./FundPicker";
import PageHeader from "./PageHeader";
import PortfolioCharts from "./PortfolioCharts";
import PortfolioStats from "./PortfolioStats";

function Portfolios() {

  const formik = useFormik({
    initialValues: {
      fundQuery: "ARKG",
      compareQuery: "QQQ",
      benchmarkQuery: "SPY",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
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
              <FundPicker 
                values={formik.values} 
                onSubmit={formik.onSubmit} 
                onChange={formik.onChange} 
              />
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
    </>
  );
}

export default Portfolios;
