import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import { LayoutProps } from '../_models';

export class Layout extends Component<LayoutProps, any> {
  render() {
    return (
      <div className="layout-wrapper">
        <GridLayout
          className={`layout ${this.props.isEditable ? 'editable' : ''}`}
          layout={this.props.layout.elements}
          cols={12}
          rowHeight={30}
          width={500}
        >
          {this.props.layout.elements.map((element) => (
            <div key={element.i}></div>
          ))}
        </GridLayout>
      </div>
    );
  }
}
