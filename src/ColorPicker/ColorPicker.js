import React, { useState, useCallback, useMemo } from 'react';
import { hexToRgb, rgbToHex, useOutsideClick } from './utils';
import './ColorPicker.scss';
import ColorPickerHandle from './ColorPickerHandle';
import DropdownMenu from './DropdownMenu';
import ColorsList from './ColorsList';
import RgbMenu from './RgbMenu';

const ColorPicker = ({value, onChange, colors}) => {

  const [rgbArray, setRgbArray] = useState(hexToRgb(value));
  const colorBoxValue = useMemo(() => rgbToHex(rgbArray), [rgbArray])

  const [colorListOpen, setColorListOpen] = useState(false);
  const handleColorListToggle = useCallback(() => setColorListOpen(value => !value), []);
  const handleColorListSelect = useCallback(color => {
    onChange(color.hex);
    setRgbArray(hexToRgb(color.hex));
    setColorListOpen(false);
  }, [onChange]);

  const [rgbMenuOpen, setRgbMenuOpen] = useState(true);
  const handleRgbMenuToggle = useCallback(() => setRgbMenuOpen(value => !value), []);
  const handleRgbMenuChange = useCallback(value => setRgbArray(value), []);
  const handleRgbMenuSubmit = useCallback(() => {
    onChange(colorBoxValue);
    setRgbMenuOpen(false);
  }, [colorBoxValue, onChange]);
  const handleRgbMenuCancel = useCallback(() => {
    setRgbArray(hexToRgb(value));
    setRgbMenuOpen(false);
  }, [value]);

  useOutsideClick(() => {
    if (colorListOpen) {
      setColorListOpen(false);
    }
    if (rgbMenuOpen) {
      setRgbMenuOpen(false);
    }
  }, [colorListOpen, rgbMenuOpen])

  const colorList = useMemo(
    () => <ColorsList
      colors={colors}
      onSelect={handleColorListSelect}/>,
    [colors, handleColorListSelect]);

  const rgbMenu = useMemo(
    () => <RgbMenu
      rgbArray={rgbArray}
      onChange={handleRgbMenuChange}
      onSubmit={handleRgbMenuSubmit}
      onCancel={handleRgbMenuCancel}/>,
    [rgbArray, handleRgbMenuChange, handleRgbMenuSubmit, handleRgbMenuCancel]);

  return (
    <div className="color-picker">
      <ColorPickerHandle
        hexValue={value}
        colorBoxValue={colorBoxValue}
        onColorListToggle={handleColorListToggle}
        onRgbMenuToggle={handleRgbMenuToggle}/>
      <DropdownMenu isOpen={rgbMenuOpen} triangleOffset="67%">
        {rgbMenu}
      </DropdownMenu>
      <DropdownMenu isOpen={colorListOpen} triangleOffset="87%">
        {colorList}
      </DropdownMenu>
    </div>
  );
}

export default ColorPicker;