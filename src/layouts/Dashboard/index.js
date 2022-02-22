import {
  Box,
  alpha,
  Card,
  Container,
  styled,
} from "@mui/material";

import NavBar from "./NavBar/NavBar";

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



const Dashboard = (props) => {

  fetch()



  return (
    <>
      <MainWrapper>
        <NavBar />
          <MainContent maxWidth="xl">
            <Box mx={8}>
              <CardWrapper>
                <Box mx={4}>
                  <h1>Sample Results</h1>
                </Box>
              </CardWrapper>
            </Box>
          </MainContent>
      </MainWrapper>
    </>
  );
};

export default Dashboard;
