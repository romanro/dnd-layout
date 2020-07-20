import React, { Component } from 'react';

import { EnumWidgetType, IWidgetComponent, IWidgetProps } from '../_models';

export class WidgetRed extends Component<IWidgetProps, any>
  implements IWidgetComponent {
  widgetType: EnumWidgetType = EnumWidgetType.RED; // hardcoded for now

  onStartDrag = (event: any, id: EnumWidgetType) => {
    if (this.props.isDraggable) {
      event.dataTransfer.setData('widgetType', id); // If will not work in IE... can be changed to event.dataTransfer.setData(“text/plain”,id)
    }
  };

  render() {
    return (
      <div
        className={`widget ${this.props.isDraggable ? 'selectable' : ''} ${
          this.widgetType
        }`}
        draggable={this.props.isDraggable}
        onDragStart={(event) => {
          this.onStartDrag(event, this.widgetType);
        }}
      >
        <h3>{this.widgetType} Widget</h3>
      </div>
    );
  }
}
