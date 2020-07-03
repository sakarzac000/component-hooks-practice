import React, { Component } from 'react';
import AlignmentH from './hooks/alignmentH'
import HideMeH from './hooks/HideMeH';
import CounterH from './hooks/counterH';
import FontSizeH from './hooks/fontSize';
import ColorMeH from './hooks/colorMeH';
import ClockH from './hooks/clockH';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AlignmentH />
        <HideMeH />
        <CounterH />
        <FontSizeH />
        <ColorMeH />
        <ClockH />
      </div>
    );
  }
}
