// import Footer from "src/components/Footer";
import { Grid } from "@mui/material";

import Daily from "../components/SmallCharts/Daily";


function Portfolio() {
  return (
    <>
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
        <Grid item xs={12}>
          <Daily />
        </Grid>
        {/* <Grid item xs={12}>
          <Block2 />
        </Grid>
        <Grid item xs={12}>
          <Block3 />
        </Grid>
        <Grid item xs={12}>
          <Block4 />
        </Grid>
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item xs={12}>
          <Block6 />
        </Grid> */}
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Portfolio;
