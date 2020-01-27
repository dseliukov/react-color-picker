import React from 'react';

const ColorsList = ({colors, onSelect}) => {
  return (
    <ul className="color-picker__colors-list">
      {colors.map(color => 
        <li className="color-picker__colors-list-item"
          key={color.hex}
          onClick={onSelect.bind(this, color)}>
          <span>{color.name}</span>
          <div className="color-picker__color-box"
            style={{backgroundColor: color.hex}}></div>
        </li>
      )}
    </ul>
  )
}

export default React.memo(ColorsList);