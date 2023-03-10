import React from 'react';

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#FFF ',
      }}
    >
      <div>
        {' '}
        {colorValue ? colorValue : 'emptyValue'}
        <br></br>
        {hexValue ? hexValue : null}
      </div>
    </section>
  );
};

export default Square;
