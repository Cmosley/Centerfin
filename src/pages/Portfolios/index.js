// import Footer from "src/components/Footer";
import { Grid } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import FundPicker from "./FundPicker";
import PageHeader from "./PageHeader";
import PortfolioCharts from "./PortfolioCharts";
import PortfolioStats from "./PortfolioStats";
// import yahooFinance from "yahoo-finance2";

const alpha_key = process.env.REACT_APP_ALPHA_API_KEY;
const alpha = require("alphavantage")({ key: { alpha_key } });




function Portfolios() {
  const [result, setResult] = useState([])
  const [symbols, setSymbols] = useState([])
  const [loading, setLoading] = useState(false);

  

//  let symbols = [{fund: 'arkg', compare: 'qqq', benchmark: 'spy'}]
   

  // useEffect(() => {
  //   searchTickers(result)
  // },[])

  // const searchTickers = () => {
  //   symbols.forEach(async(element) => {
  //     const response = await alpha.data.daily(element);
  //       if (setLoading) {
  //         setResult(response[element]);
  //       }
  //   })
  // }
    
  // console.log(result)


  const formik = useFormik({
    initialValues: {
      fundQuery: "",
      compareQuery: "",
      benchmarkQuery: "",
    },
    onSubmit: (e, values) => {
      e.preventDefault()
      setSymbols(values)
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
                handleSubmit={formik.handleSubmit}
                handleChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <PortfolioStats 
                values={formik.values} 
              />
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
