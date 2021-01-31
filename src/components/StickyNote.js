import React, { Component } from 'react';

import './StickyNote.css';

class StickyNote extends Component {

  constructor(props) {
    super(props)

    this.state = {
      titleName: props.note.title,
      contentData: props.note.content
    }
  }

  onClickDelete = (id) => {
    this.props.onClickDelete(id);
  }

  updateTitle = (e, id) => {
    let updatedValue = e.currentTarget.textContent
    // this.setState({
    //   titleName: updatedValue
    // })
    this.props.updateNoteContent('title', id, updatedValue)
  }

  updateContent = (e, id) => {
    let updatedValue = e.currentTarget.textContent
    // this.setState({
    //   contentData: updatedValue
    // })
    this.props.updateNoteContent('content', id, updatedValue)
  }

  render() {
    const { note } = this.props
    return (
      <div className='mainStickyNote'>
        {this.props.tape && <div className='tape'></div>}

        <div className='stickyNote' style={{ backgroundColor: note.color }}>
          {this.props.title && <div className='row1'>
            <div
              className='addicon'
              onClick={this.props.onClickAdd}
            >&#43;</div>
            <div
              className='titleText'
              contentEditable='true'
              onInput={(e) => this.updateTitle(e, note.id)}
            >{this.state.titleName}</div>
            <div
              className='crossicon'
              onClick={(e) => this.onClickDelete(note.id)}
            >&#10006;</div>
          </div>}
          <div
            className='row2'
            contentEditable='true'
            onInput={(e) => this.updateContent(e, note.id)}
          >{this.state.contentData}</div>
          {this.props.footer && <div className='row3'>
            <div className='footerText'>{note.timeStamp}</div>
          </div>}
        </div>
      </div>
    );
  }
}

export default StickyNote