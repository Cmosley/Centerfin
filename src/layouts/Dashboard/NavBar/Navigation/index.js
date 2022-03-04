import { Box, List, styled } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import menuItems from "./items";

const MenuWrapper = styled(Box)(
  () => `
  .MuiList-root {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > .MuiList-root {
      display: flex;
      flex-direction: row;
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
      flex-direction: row;
      
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
          font-size: ${theme.typography.pxToRem(14)};
          padding: ${theme.spacing(1.4, 2)};
          position: relative;
          font-weight: bold;
          color: ${theme.colors.alpha.trueWhite[100]};

          .name-wrapper {
            transition: ${theme.transitions.create(["color"])};
          }

          .MuiBadge-root {
            position: absolute;
            right: 16px;
            top: 12px;

            .MuiBadge-badge {
              background: ${theme.colors.alpha.white[70]};
              color: ${theme.colors.alpha.black[100]};
              font-size: ${theme.typography.pxToRem(11)};
              font-weight: bold;
              text-transform: uppercase;
            }
          }
  
          .MuiSvgIcon-root {
            transition: ${theme.transitions.create(["color"])};
            font-size: ${theme.typography.pxToRem(24)};
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

// const renderNavigationMenuItems = ({ items, path }) => (
//   <SubMenuWrapper>
//     <List component="div">
//       {items.name}
//     </List>
//   </SubMenuWrapper>
// );



function NavigationMenu() {
  const location = useLocation();

  return (
    <>
      {menuItems.map((item) => (
        <MenuWrapper key={uuidv4()}>
          <List component="div">
            <span className="name-wrapper">Dashboard</span>
          </List>
        </MenuWrapper>
      ))}
    </>
  );
}

export default NavigationMenu;
