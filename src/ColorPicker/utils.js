import { useCallback, useEffect } from 'react';

const HEX_COLOR_REGEXP = /^#([A-F\d]{3}){1,2}$/i;

export const isValidHexColor = str => typeof str === 'string' && HEX_COLOR_REGEXP.test(str);

export const hexToRgb = hexString => {
  if (!isValidHexColor(hexString)) {
    throw new Error('Argument is not a valid HEX string');
  }
  let hexArray = (hexString.length === 3 ? hexString + hexString : hexString).slice(1).match(/.{2}/g);
  return hexArray.map(value => parseInt(value, 16));
};

export const rgbToHex = (rgbArray) => {
  return rgbArray.reduce((result, value) => {
    if (typeof value !== 'number') {
      throw new Error('Argument is not a number');
    }
    const string = value.toString(16);
    return result += string.length === 1 ? `0${string}` : string;
  }, '#');
};

export const useOutsideClick = (handler, deps) => {
  const callback = useCallback(handler, deps);
  useEffect(() => {
    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [callback]);
}