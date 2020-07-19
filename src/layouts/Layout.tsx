import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import { ILayoutProps, IUpdateLayoutData } from '../_models';
import { WidgetPlaceholder } from '../widgets';

export class Layout extends Component<ILayoutProps, any> {
  container: any;

  state = {
    width: 500,
  };

  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth,
    });
  }

  onDragOver(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

  onDrop(event: any, placeholderId: string) {
    if (this.props.isEditable) {
      const widgetType = event.dataTransfer.getData('widgetType'); // If will not work in IE... can be changed to event.dataTransfer.getData("text")

      const data: IUpdateLayoutData = {
        placeholderId,
        widgetType,
      };
      this.props.updateLayout(data);
    }
  }

  render() {
    const { width } = this.state;

    return (
      <div className="layout-wrapper" ref={(el) => (this.container = el)}>
        <GridLayout
          className={`layout ${this.props.isEditable ? 'editable' : ''}`}
          layout={this.props.layout.elements}
          cols={12}
          rowHeight={30}
          width={width}
        >
          {this.props.layout.elements.map((element) => (
            <div
              key={element.i}
              onDragOver={(event) => {
                this.onDragOver(event);
              }}
              onDrop={(event) => {
                this.onDrop(event, element.i);
              }}
            >
              <WidgetPlaceholder currentWidget={element.widget} />
            </div>
          ))}
        </GridLayout>
      </div>
    );
  }
}
