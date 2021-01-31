import React, { Component } from 'react';
import StickyNotesList from './StickyNotesList'

import './MainLayout.css'

class MainLayout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showCustomColors: false,
      showTape: true,
      showOutput: false,
      showTitle: true,
      showFooter: true
    }
  }


  toggleRadioButtons = (e) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  render() {
    return (
      <div className='mainDiv'>
        <div className='heading'>
          React Stickies - Sticky Notes for React
        </div>
        <StickyNotesList
          colors={this.state.showCustomColors}
          tape={this.state.showTape}
          title={this.state.showTitle}
          footer={this.state.showFooter}
        />
        <div className='radioButtonMain'>
          <form>
            <input
              type="radio"
              name="showCustomColors"
              value="custom_colors"
              checked={this.state.showCustomColors}
              onClick={this.toggleRadioButtons} />Custom Colors
            <input
              type="radio"
              name="showTape"
              value="show_tape"
              checked={this.state.showTape}
              onClick={this.toggleRadioButtons} />Show Tape
            <input
              type="radio"
              name="showOutput"
              value="show_output"
              checked={this.state.showOutput}
              onClick={this.toggleRadioButtons} />Show Output
            <input
              type="radio"
              name="showTitle"
              value="show_title"
              checked={this.state.showTitle}
              onClick={this.toggleRadioButtons} />Show Title
            <input
              type="radio"
              name="showFooter"
              value="show_footer"
              checked={this.state.showFooter}
              onClick={this.toggleRadioButtons} />Show Footer
          </form>
        </div>
      </div>
    );
  }
}

export default MainLayout