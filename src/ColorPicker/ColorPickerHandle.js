import React from 'react';

const ColorPickerHandle = ({hexValue, colorBoxValue, onRgbMenuToggle, onColorListToggle}) => {
  return (
    <div className="color-picker__handle">
      <div className="color-picker__hex">{hexValue}</div>
      <div>
        <button
          className="color-picker__button"
          onClick={onRgbMenuToggle}>
          <div
          className="color-picker__color-box"
            style={{backgroundColor: colorBoxValue}}></div>
        </button>
        <button
        className="color-picker__button"
          onClick={onColorListToggle}>
          <div className="color-picker__button-arrow"></div>
        </button>
      </div>        
    </div>
  )
};

export default React.memo(ColorPickerHandle);