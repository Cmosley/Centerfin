import PageHeader from "./PageHeader";
import ETFList from "./ETFList"
import Sidebar from "./Sidebar";
import AssetVitals from './AssetVitals'
import {
  TextField,
  Divider,
  Card,
  Stack,
  Box,
  Autocomplete,
  Grid,
  IconButton,
  Drawer,
  styled,
  useTheme,
} from "@mui/material";

function Analyzer() {
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
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: { xs: "none", lg: "inline-block" },
          }}
        >
          <Card>
            <Sidebar/>
          </Card>
        </Grid>
        <Grid item xs={12} lg={9}>
          <AssetVitals/>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </>
  );
}

export default Analyzer;
