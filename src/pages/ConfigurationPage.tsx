import React, { Component } from 'react';

export class ConfigurationPage extends Component<any, any> {
  layoutId = null;
  componentWillMount() {
    const {
      match: { params },
    } = this.props;
    this.layoutId = params.layoutId;
  }
  render() {
    return <h1>Configuration Page {this.layoutId}</h1>;
  }
}
