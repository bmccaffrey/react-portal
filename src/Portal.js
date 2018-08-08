import { Component } from 'react';
import ReactDOM from 'react-dom';
const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children);
  }
}
