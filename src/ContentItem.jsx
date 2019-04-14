import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext'

class ContentItem extends Component {
  render() {
    console.log('vvv',this.context);
    let {theme} = this.context;
    return (
      <div style={{ background: theme.background, color: theme.foreground }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deleniti?
      </div>
    )
  }
}

ContentItem.contextType = ThemeContext;
export default ContentItem;