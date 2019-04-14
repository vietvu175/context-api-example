import React from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeTogglerButton = () => {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button onClick={toggleTheme} style={{backgroundColor: theme.background, color:theme.foreground}}>
          change theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton;
