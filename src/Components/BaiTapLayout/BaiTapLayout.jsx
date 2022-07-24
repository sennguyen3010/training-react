//rcc
import React, { Component } from 'react';
import BTHeader from './BTHeader';

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <div className="d-flex">
          <div className="w-25"></div>
          <div className="w-75"></div>
        </div>
      </div>
    );
  }
}
