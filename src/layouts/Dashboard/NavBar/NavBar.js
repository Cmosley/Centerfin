import React from "react";

import {
  Box,
  Card,
  Tooltip,
  IconButton,
  Container,
  darken,
  Divider,
  alpha,
  styled,
  useTheme,
} from "@mui/material";


const NavBarWrapper = styled(Card)(
  ({ theme }) => `
    
    background: ${alpha(darken(theme.colors.primary.dark, 0.2), 0.95)};
    backdrop-filter: blur(5px);
    margin: ${theme.spacing(0, 0, 5)};
    padding: ${theme.spacing(4, 0, 44)};

    @media (min-width: ${theme.breakpoints.values.lg}px) {
      margin: ${theme.spacing(0, 8, 5)};
      padding: ${theme.spacing(4, 3, 44)};
    }
    display: flex;
    align-items: center;
    border-radius: 0;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    position: relative;
`
);

const NavBarImage = styled(Box)(
  () => `
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`
);

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
    background: ${theme.colors.alpha.trueWhite[10]};
`
);
  
  
function NavBar() {
  const theme = useTheme();


  return (
    <NavBarWrapper>
      <NavBarImage
        sx={{
          opacity: 0.0,
          background: `${theme.colors.gradients.black1}`,
        }}
      />
      <NavBarImage
        sx={{
          opacity: 0.7,
          background: `${theme.colors.gradients.green2}`,
        }}
      />
      <NavBarImage
        sx={{
          opacity: 0.4,
          backgroundImage:
            'url("https://uploads-ssl.webflow.com/5ed7e67a3493696d5430addd/61004825399b2669626c80b9_footerBg.jpg")',
        }}
      />
      <Container
        sx={{
          zIndex: 6,
        }}
        maxWidth="xl"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex">
            <Box
              component="span"
              sx={{
                display: { xs: "none", md: "inline-flex" },
              }}
            ></Box>
          </Box>
          <Box display="flex">
            <Box
              component="span"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              <Box mx={1}></Box>
            </Box>
            <Box
              component="span"
              sx={{
                display: { md: "none", xs: "inline-flex" },
              }}
            ></Box>
          </Box>
        </Box>
        <DividerWrapper
          sx={{
            display: { xs: "none", md: "flex" },
            my: 4,
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          sx={{
            width: "100%",
            display: { xs: "none", md: "inline-block" },
          }}
        ></Box>
      </Container>
    </NavBarWrapper>
  );
}

export default NavBar;