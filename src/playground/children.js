import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.createPortal(child, container)
const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root')


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWilUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}


class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + 1
      }
    }) 
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child of the div with the onclick handler. 
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}


function Child() {
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  )
}


ReactDOM.render(<Parent />, appRoot)