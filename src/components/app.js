import React, { Component } from 'react';
import AlignMe from './alignme';
import HideMe from './hideme';
import Counter from './counter';
import FontSize from './fontsize';
import ColorMe from './colorme';
import Clock from './clock';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AlignMe />
        <HideMe />
        <Counter />
        <FontSize />
        <ColorMe />
        <Clock />
      </div>
    );
  }
}
