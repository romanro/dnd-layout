import React, { Component } from 'react';

import { EnumWidgetType, IWidgetDraggableContainerProps } from '../_models';
import { renderWidget } from './WidgetService';

export class WidgetDraggableContainer extends Component<
  IWidgetDraggableContainerProps,
  any
> {
  onStartDrag = (event: any, id: EnumWidgetType) => {
    event.dataTransfer.effectAllowed = 'copyMove';
    event.dataTransfer.setData('widgetType', id); // If will not work in IE... can be changed to event.dataTransfer.setData(“text/plain”,id)
  };

  render() {
    return (
      <div
        className={`widget-draggable-container`}
        draggable={true}
        onDragStart={(event) => {
          this.onStartDrag(event, this.props.currentWidget);
        }}
      >
        {renderWidget(this.props.currentWidget)}
      </div>
    );
  }
}
