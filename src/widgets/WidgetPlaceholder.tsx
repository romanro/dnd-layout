import React, { Component } from 'react';

import { EnumWidgetType, IWidgetPlaceholderProps } from '../_models';
import { WidgetRed } from './WidgetRed';

export class WidgetPlaceholder extends Component<IWidgetPlaceholderProps, any> {
  renderWidget(widgetType: EnumWidgetType | undefined) {
    switch (widgetType) {
      case EnumWidgetType.RED:
        return <WidgetRed isDraggable={false} />;
    }
    return null;
  }

  render() {
    return (
      <div className="widget-placeholder">
        {this.renderWidget(this.props.currentWidget)}
      </div>
    );
  }
}
