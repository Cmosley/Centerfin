import { Box, ListItem, IconButton, styled, List } from "@mui/material";
import {  NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import menuItems from "./items";


const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: 0;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > .MuiList-root {
      display: flex 
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
    }

    .MuiIconButton-root {
      display: flex;
      background-color: transparent;
      border-radius: ${theme.general.borderRadiusLg};
      justify-content: center;
      font-size: ${theme.typography.pxToRem(24)};
      padding: ${theme.spacing(1.4, 1)};
      position: relative;
      color: ${theme.colors.alpha.trueWhite[100]} !important;
    }

    .MuiSvgIcon-root {
      transition: ${theme.transitions.create(["color"])};
      font-size: ${theme.typography.pxToRem(28)};
      margin-right: ${theme.spacing(1)};
      color: ${theme.colors.alpha.trueWhite[50]};
    }

     &.Mui-active,
     &:hover {
        background-color: ${theme.colors.alpha.white[10]};
        border-radius: ${theme.general.borderRadiusLg};

        .MuiSvgIcon-root {
          color: ${theme.colors.alpha.trueWhite[100]};
        }
      }
  }
`
);


function Navigation(active) {
  return (
    <>
      <MenuWrapper  sx={{ display: "flex" }}>
        {menuItems.map((item) => (
          <List key={uuidv4()}>
            <ListItem>
              <IconButton component={NavLink} to={item.link}>
                {item.icon && <item.icon />}
                <span className="name-wrapper">{item.name}</span>
              </IconButton>
            </ListItem>
          </List>
        ))}
      </MenuWrapper>
    </>
  );
}

export default Navigation;
