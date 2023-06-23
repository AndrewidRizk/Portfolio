import React from 'react';
import './Styles/Toggle.css';

const Toggle = ({ toggleTheme, isChecked }) => {
  return (
    <div className="switch">
      <input
        type="checkbox"
        className="switch__input"
        id="Switch"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <label className="switch__label" htmlFor="Switch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
    </div>
  );
};

export default Toggle;
