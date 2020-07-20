import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import { ILayoutProps, IUpdateLayoutData } from '../_models';
import { WidgetPlaceholder } from '../widgets';

export class Layout extends Component<ILayoutProps, any> {
  container: any;

  state = {
    width: 500,
    draggingOver: false,
  };

  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth,
    });
  }

  onDragOver(event: any) {
    this.setState({ draggingOver: true });
    event.stopPropagation();
    event.preventDefault();
  }

  onDragLeave(event: any) {
    this.setState({ draggingOver: false });
    event.stopPropagation();
    event.preventDefault();
  }

  onDrop(event: any, placeholderId: string) {
    this.setState({ draggingOver: false });
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
    const { width } = this.state; // calculated width based on parent width

    return (
      <div className="layout-wrapper" ref={(el) => (this.container = el)}>
        <GridLayout
          className={`layout ${this.props.isEditable ? 'editable' : ''} ${
            this.state.draggingOver ? 'selected-for-drop' : ''
          }`}
          layout={this.props.layout.elements}
          cols={12}
          rowHeight={30}
          width={width}
        >
          {this.props.layout.elements.map((element) => (
            <div
              key={element.i}
              onDragLeave={(event) => {
                this.onDragLeave(event);
              }}
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
