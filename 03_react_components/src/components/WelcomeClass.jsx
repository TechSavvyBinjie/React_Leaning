import { Component } from "react";
import PropTypes from "prop-types";
class WelcomeClass extends Component {
  render() {
    return <h1>HEllo ,{this.props.name}</h1>;
  }
}
WelcomeClass.PropTypes = {
  name: PropTypes.name,
};
export default WelcomeClass;
