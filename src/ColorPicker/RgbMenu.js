import React from 'react';

const RgbMenu = ({rgbArray, onChange, onSubmit, onCancel}) => {

  const [rValue, gValue, bValue] = rgbArray;
  const handleRChange = event => onChange([+event.target.value, gValue, bValue]);
  const handleGChange = event => onChange([rValue, +event.target.value, bValue]);
  const handleBChange = event => onChange([rValue, gValue, +event.target.value]);

  return (
    <>
      <ul className="color-picker__rgb-menu-list">
        <li className="color-picker__rgb-menu-row">
          <span className="color-picker__rgb-menu-row-title">R</span>
          <input
            className="color-picker__rgb-menu-slider color-picker__rgb-menu-slider--red"
            type="range"
            min="0"
            max="255"
            value={rValue}
            onChange={handleRChange}/>
        </li>
        <li className="color-picker__rgb-menu-row">
          <span className="color-picker__rgb-menu-row-title">G</span>
          <input
            className="color-picker__rgb-menu-slider color-picker__rgb-menu-slider--green"
            type="range"
            min="0"
            max="255"
            value={gValue}
            onChange={handleGChange}/>
        </li>
        <li className="color-picker__rgb-menu-row">
          <span className="color-picker__rgb-menu-row-title">B</span>
          <input
            className="color-picker__rgb-menu-slider color-picker__rgb-menu-slider--blue"
            type="range"
            min="0"
            max="255"
            value={bValue}
            onChange={handleBChange}/>
        </li>
      </ul>
      <div className="color-picker__rgb-menu-buttons">
        <button
          className="color-picker__rgb-menu-button"
          onClick={onCancel}>
          CANCEL
        </button>
        <button
          className="color-picker__rgb-menu-button color-picker__rgb-menu-button--primary"
          onClick={onSubmit}>
          OK
        </button>
      </div>
    </>
  );
};

export default React.memo(RgbMenu);