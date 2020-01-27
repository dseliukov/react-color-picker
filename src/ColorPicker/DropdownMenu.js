import React from 'react';

const DropdownMenu = ({isOpen, triangleOffset, children}) => {
  return (
    <div className={`color-picker__dropdown-menu-container${isOpen ? ' color-picker__dropdown-menu-container--open' : ''}`}>
      <div className="color-picker__dropdown-menu-triangle" style={{left: triangleOffset}}></div>
      <div
        className="color-picker__dropdown-menu"
        onClick={event => event.nativeEvent.stopImmediatePropagation()}>
        {children}
      </div>
    </div>
  )
};

export default React.memo(DropdownMenu);