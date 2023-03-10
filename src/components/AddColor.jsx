import React from 'react';
import colorNames from 'colornames';

const AddColor = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        autoFocus
        placeholder="Search Color "
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default AddColor;
