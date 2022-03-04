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

const Navigation = ({
  menuItems: items,
  icon: Icon, 
  active, 
  name, 
  ...rest
}) => {

  const location = useLocation();
 
  
  return (
    <>
      <MenuWrapper key={uuidv4()}>
        <List component="div">
          {menuItems.map((item) => (
            <ListItem component="div" key={item.name} {...rest}>
              <IconButton
                activeClassName="Mui-active"
                component={NavLink}
                to='/dashboard'
              >
                {Icon && <Icon />}
                <span className="name-wrapper">{item.name}</span>
              </IconButton>
            </ListItem>
          ))}
        </List>
      </MenuWrapper>
    </>
  );
}

export default Navigation;
