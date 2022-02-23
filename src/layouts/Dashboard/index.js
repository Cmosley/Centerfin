import {
  Box,
  alpha,
  Card,
  Container,
  styled,
} from "@mui/material";

import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import PageHeader from "../../components/PageHeader/PageHeader"
// import { twelveDataConfig } from "../../config";



const MainWrapper = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(0, 0, 4)};

  .MuiDrawer-fm .MuiPaper-root {
    top: 0;
    height: 100%;
  }

  .Mui-FixedWrapper .MuiPaper-root {
    top: 0;
    left: 0;
  }
  .MuiDrawer-hd .MuiPaper-root {
    top: 0;
    height: 100%;
  }

  .footer-wrapper {
    box-shadow: 0px 0px 2px ${theme.colors.alpha.black[30]};
}
`
);

const MainContent = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(-45)};
        position: relative;
        z-index: 55;
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
        min-height: 100vh;
        backdrop-filter: blur(5px);
        border-radius: ${theme.general.borderRadiusXl};
        background: ${alpha(theme.colors.alpha.white[100], 0.9)};
`
);

// console.log(twelveDataConfig)
const apiKey = process.env.REACT_APP_TWELVE_DATA_API_KEY;
const testNum = process.env.REACT_APP_TEST_NUM;


const portfolio = ['ADISK', 'ARKG', 'DSU', 'FRA', 'BHK',] 

//'QQQ', 'SMH', 'IGV', 'XBI', 'XLV', 'XLF', 'XLI', 'ICLN', 'IYT', 'XLB', 'IEMG', 'IEFA', 'EUFN', 'VYM', 'MUB', 'MBB', 'IEF', 'TIP', 'LQD', 'KBWB', 'VNQ', 'GLD', 'SLV', 'FCX', 'GBTC', 'CASHX'


const Dashboard = (props) => {
  const [etfData, setEtfData] = useState()

  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       `https://api.twelvedata.com/eod?symbol=${portfolio}&apikey=${apiKey}`
  //       );
  //     const data = await response.json()
  //     setEtfData(data)
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  
  return (
    <>
      <MainWrapper>
        <NavBar />
          <MainContent maxWidth="xl">
            <Box mx={8}>
              <CardWrapper>
                <PageHeader></PageHeader>
                <Box mx={4}>
                  {/* <button onClick={fetchData}>Get Data</button> */}
                    <ul>
                    {etfData !== undefined ?
                      etfData.symbol
                    : null }
                    </ul>
                </Box>
              </CardWrapper>
            </Box>
          </MainContent>
      </MainWrapper>
    </>
  );
};

export default Dashboard;
