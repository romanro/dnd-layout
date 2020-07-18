import React, { Component } from 'react';

import { IWidgetProps } from '../_models';

export class WidgetRed extends Component<IWidgetProps, any> {
  render() {
    return (
      <div
        className={`widget red ${this.props.isSelectable ? 'selectable' : ''}`}
        draggable={this.props.isSelectable}
      ></div>
    );
  }
}
