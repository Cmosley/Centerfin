import {
  Autocomplete,
  Box,
  Button,
  Card,
  Grid,
  TextField,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { useFormik } from "formik";


function FundPicker({onChange, onSubmit, values})  {
  const funds = [
    { name: "ADISK" },
    { name: "ARKG" },
    { name: "DSU" },
    { name: "FRA" },
    { name: "BHK" },
    { name: "QQQ" },
    { name: "SMH" },
    { name: "IGV" },
    { name: "XBI" },
    { name: "XLV" },
    { name: "XLF" },
    { name: "XLI" },
    { name: "ICLN" },
    { name: "IYT" },
    { name: "XLB" },
    { name: "IEMG" },
    { name: "IEFA" },
    { name: "EUFN" },
    { name: "VYM" },
    { name: "MUB" },
    { name: "MBB" },
    { name: "IEF" },
    { name: "TIP" },
    { name: "LQD" },
    { name: "KBWB" },
    { name: "VNQ" },
    { name: "GLD" },
    { name: "SLV" },
    { name: "FCX" },
    { name: "GBTC" },
    { name: "CASHX" },
  ];

  // const formik = useFormik({
  //   initialValues: {
  //     fundQuery: "ARKG",
  //     compareQuery: "QQQ",
  //     benchmarkQuery: "SPY",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <>
      <Card
        sx={{
          p: 1,
          mb: 3,
        }}
      >
        <form onSubmit={values.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box p={1}>
                {/* fund query */}
                <Autocomplete
                  fullWidth
                  limitTags={1}
                  sx={{
                    m: 0,
                  }}
                  options={funds}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        m: 0,
                      }}
                      onChange={onChange}
                      id="fundQuery"
                      name="fundQuery"
                      value={values.fundQuery}
                      placeholder={"Search by fund name..."}
                      fullWidth
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              {/* compare query */}
              <Box p={1}>
                <Autocomplete
                  sx={{
                    m: 0,
                  }}
                  options={funds}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        m: 0,
                      }}
                      onChange={onChange}
                      placeholder={"Compare to "}
                      id="compareQuery"
                      name="compareQuery"
                      value={values.compareQuery}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box p={1}>
                {/* benchmark query */}
                <Autocomplete
                  sx={{
                    m: 0,
                  }}
                  options={funds}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        m: 0,
                      }}
                      onChange={onChange}
                      id="benchmarkQuery"
                      name="benchmarkQuery"
                      placeholder={"Benchmark against"}
                      value={values.benchmarkQuery}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box mt={0.5} p={1}>
                <Button type="submit" variant="contained">
                  Search
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
}

export default FundPicker;
