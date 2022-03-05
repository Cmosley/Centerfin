import { Grid } from "@mui/material";
import PageHeader from "./PageHeader";

function Clients() {
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
      <PageHeader />
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Clients;
