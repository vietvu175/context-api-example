import React, { Component } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemeTogglerButton from './ThemeTogglerButton';
import Page from './Content';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          <ThemeTogglerButton />
          <ThemedButton>another button</ThemedButton>
          <Page />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
