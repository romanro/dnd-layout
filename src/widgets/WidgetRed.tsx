import React, { Component } from 'react';

import { EnumWidgetType, IWidgetProps } from '../_models';

export class WidgetRed extends Component<IWidgetProps, any> {
  widgetType: EnumWidgetType = EnumWidgetType.RED; // hardcoded for now

  onStartDrag = (event: any, id: EnumWidgetType) => {
    if (this.props.isDraggable) {
      // console.log('widget start drag', id);
      event.dataTransfer.setData('widgetType', id); // If will not work in IE... can be changed to event.dataTransfer.setData(“text/plain”,id)
    }
  };

  render() {
    return (
      <div
        className={`widget red ${this.props.isDraggable ? 'selectable' : ''}`}
        draggable={this.props.isDraggable}
        onDragStart={(event) => {
          this.onStartDrag(event, this.widgetType);
        }}
      >
        <h3>Red Widget</h3>
      </div>
    );
  }
}
