import { Grid } from "@mui/material";
import PageHeader from "./PageHeader";
import ETFList from "./ETFList"

function Analyzer() {
  return (
    <>
      <PageHeader/>
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
      <ETFList />
        
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Analyzer;
