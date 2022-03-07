import { useState } from "react";
import PropTypes from "prop-types";
import {
  Autocomplete,
  Box,
  Card,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";


const FundPicker = ({ funds }) => {
  const [fundQuery, setFundQuery] = useState("");
  const [compareQuery, setCompareQuery] = useState("");
  const [benchmarkQuery, setBenchmarkQuery] = useState("");

  const projectTags = [
    { title: "Development" },
    { title: "Design Project" },
    { title: "Marketing Research" },
    { title: "Software" },
  ];

  const projectTags = [ADISX, ARKG, DSU, FRA, BHK];

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
                multiple
                sx={{
                  m: 0,
                }}
                limitTags={2}
                options={projectTags}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      m: 0,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchTwoToneIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleFundQueryChange}
                    placeholder={"Search by fund name..."}
                    value={fundQuery}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            {/* compare query */}
            <Box p={1}>
              <Autocomplete
                sx={{
                  m: 0,
                }}
                options={funds}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      m: 0,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchTwoToneIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleCompareQueryChange}
                    placeholder={"Search by fund name..."}
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
                multiple
                sx={{
                  m: 0,
                }}
                limitTags={2}
                options={projectTags}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      m: 0,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchTwoToneIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleBenchmarkQueryChange}
                    placeholder={"Search by fund name..."}
                    value={benchmarkQuery}
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box p={1}>
              <Autocomplete
                multiple
                sx={{
                  m: 0,
                }}
                limitTags={2}
                options={projectTags}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    label={"Tags"}
                    placeholder={"Select tags..."}
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

FundPicker.propTypes = {
  funds: PropTypes.array.isRequired,
};

FundPicker.defaultProps = {
  funds: [],
};

export default FundPicker;
