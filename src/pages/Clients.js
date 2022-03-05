import { Grid } from "@mui/material";


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
      <h1>Clients</h1>
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Clients;
