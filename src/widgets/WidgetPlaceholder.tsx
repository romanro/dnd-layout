import React, { Component } from 'react';

import { IWidgetPlaceholderProps } from '../_models';
import { renderWidget } from './WidgetService';

export class WidgetPlaceholder extends Component<IWidgetPlaceholderProps, any> {
  render() {
    return (
      <div className="widget-placeholder">
        {renderWidget(this.props.currentWidget)}
      </div>
    );
  }
}
