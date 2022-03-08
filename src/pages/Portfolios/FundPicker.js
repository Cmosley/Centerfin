import { useState } from "react";
// import PropTypes from "prop-types";
import {
  Autocomplete,
  Box,
  Card,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";


function FundPicker()  {
  const [fundQuery, setFundQuery] = useState([]);
  const [compareQuery, setCompareQuery] = useState([]);
  const [benchmarkQuery, setBenchmarkQuery] = useState([]);

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


  const handleFundQueryChange = (event) => {
    event.persist();
    setFundQuery(event.target.value);
  };

  const handleCompareQueryChange = (event) => {
    event.persist();
    setCompareQuery(event.target.value);
  };

  const handleBenchmarkQueryChange = (event) => {
    event.persist();
    setBenchmarkQuery(event.target.value);
  };


  return (
    <>
      <Card
        sx={{
          p: 1,
          mb: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box p={1}>
              {/* fund query */}
              <Autocomplete
                id="fund-query"
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
                    placeholder={"Search by fund name..."}
                    fullWidth
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            {/* compare query */}
            <Box p={1}>
              <Autocomplete
                id="compare-query"
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
                    onChange={handleCompareQueryChange}
                    placeholder={"Compare to "}
                    value={compareQuery}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box p={1}>
              {/* benchmark query */}
              <Autocomplete
                id="benchmark-query"
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
                    onChange={handleBenchmarkQueryChange}
                    placeholder={"Benchmark against"}
                    value={benchmarkQuery}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

// FundPicker.propTypes = {
//   funds: PropTypes.array.isRequired,
// };

// FundPicker.defaultProps = {
//   funds: [],
// };

export default FundPicker;
