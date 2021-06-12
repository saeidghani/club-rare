import React from 'react';
import Drawer from '../UI/Drawer';

function MenuDrawer({ children, open, onClose, wrapperClass, height = 650 }) {
  return (
    <Drawer
      wrapperClass={`relative bg-warmGray rounded-b-40 border border-solid border-white ${wrapperClass}`}
      wrapperStyle={{ height }}
      open={open}
      onClose={onClose}
      placement="top"
    >
      {children}
      <div className="bgShadow"></div>
    </Drawer>
  );
}

export default MenuDrawer;
