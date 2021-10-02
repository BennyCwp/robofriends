import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorCaught: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      errorCaught: true,
    });
  }

  render() {
    if (this.state.errorCaught) {
      return <h1>Ooops there is something wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
