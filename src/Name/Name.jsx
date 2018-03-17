// Imports
import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Name extends Component {
  // Constructor
  constructor(props) {
    super(props);
    // Default state
    this.state = {
      defaultName: '',
    };
    // Binds
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.SendName = this.SendName.bind(this);
  }
  // Handlers
  // Change input
  onChange(e) {
    e.preventDefault();
    this.setState({
      defaultName: e.target.value,
    });
  }
  // Handler key
  handleKeyPress(e) {
    // Detect enter press
    if (e.charCode === 13) this.SendName(e);
  }
  // Send name
  SendName(e) {
    // Event
    e.preventDefault();
    // Set name
    this.props.setName(this.state.defaultName);
  }
  // Input
  TypeName() {
    return (
      <FormGroup>
        <FormControl
          type="text"
          value={this.state.defaultName}
          onChange={this.onChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Type your name"
        />
      </FormGroup>
    );
  }
  // Render
  render() {
    return (
      <div className="static-modal">
        <div id="Background" />
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Type your name</Modal.Title>
          </Modal.Header>

          <Modal.Body>{this.TypeName()}</Modal.Body>

          <Modal.Footer>
            <Button bsStyle="success" onClick={this.SendName}>Set name</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
// Define proptypes
Name.propTypes = {
  setName: PropTypes.func.isRequired,
};
// Export module
export default Name;
