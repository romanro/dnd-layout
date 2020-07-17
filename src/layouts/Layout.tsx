import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import { ILayout } from '../_models';

type LayoutProps = {
  layout: ILayout;
};

export class Layout extends Component<LayoutProps, any> {
  render() {
    return (
      <div className="layout-wrapper">
        <GridLayout
          className="layout"
          layout={this.props.layout.layout}
          cols={12}
          rowHeight={30}
          width={500}
        >
          {this.props.layout.layout.map((element) => (
            <div key={element.i}></div>
          ))}
        </GridLayout>
      </div>
    );
  }
}
