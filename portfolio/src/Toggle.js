import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
  render() {
    return (
        <div><div class="switch">
        <input type="checkbox" class="switch__input" id="Switch"/>
        <label class="switch__label" for="Switch">
            <span class="switch__indicator"></span>
            <span class="switch__decoration"></span>
        </label>
    </div></div>
        
    );
  }
}

export default Toggle;
