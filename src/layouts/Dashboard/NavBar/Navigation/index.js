import { useState } from "react";
import { Box, ListItem, IconButton, styled, List } from "@mui/material";
import { useLocation, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import menuItems from "./items";




const MenuWrapper = styled(Box)(
  () => `
  .MuiList-root {
    padding: 0;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > .MuiList-root {
      display: flex !important;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    width: 100%;
    .MuiList-root {
      padding: 0;
      display: flex;
      flex-direction: column;
      
      .MuiList-root .MuiList-root .MuiListItem-root .MuiIconButton-root {
        font-weight: normal !important;
      }

      .MuiListItem-root {
        padding: 0 2px;
        justify-content: center;
        width: auto;

        &:last-child {
          margin-left: auto;
        }
    
        .MuiIconButton-root {
          display: flex;
          background-color: transparent;
          border-radius: ${theme.general.borderRadiusLg};
          justify-content: center;
          font-size: ${theme.typography.pxToRem(20)};
          padding: ${theme.spacing(1.4, 2)};
          position: relative;
          font-weight: bold;
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

            .MuiSvgIcon-root {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }
      }
    }
`
);

const Navigation = (active) => {
  const location = useLocation();

  return (
    <>
      <MenuWrapper id='menu' sx={{ display: "flex"  }}>
        {menuItems.map((item) => (
          <List id="listcomp">
            <ListItem>
              <SubMenuWrapper id="submenu" key={uuidv4()}>
                <IconButton component={NavLink} to="/dashboard/clients">
                  {item.icon && <item.icon />}
                  <span className="name-wrapper">{item.name}</span>
                </IconButton>
              </SubMenuWrapper>
            </ListItem>
          </List>
        ))}
      </MenuWrapper>
    </>
  );
};

export default Navigation;
