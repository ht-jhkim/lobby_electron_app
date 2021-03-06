import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    dispatch({ type: "set", sidebarShow: false });
  };

  return (
    <CSidebar show={show} onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}>
      <CSidebarNav onClick={toggleSidebar}>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
