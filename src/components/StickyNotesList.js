import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StickyNote from './StickyNote'
import * as action from '../actions/notesContentAction'

class StickyNotesList extends Component {

  constructor(props) {
    super(props)


    this.state = {
      notes: JSON.parse(sessionStorage.getItem('notes')) || []
    }
  }

  componentWillMount() {
    if(!this.state.notes.length > 0){
      this.createNote()
    }
  }

  selectNoteColor = () => {
    const colors = ['#FBE4BE', '#F7D1D1', '#E4FABC', '#CAE0FA']
    return colors[Math.floor(Math.random() * (colors.length - 1))];
  }

  getTimeStamp = () => {
    let current = new Date()
    let formattedTime = `${current.toLocaleString('default', { month: 'long' }).substr(0, 3)}
                        ${current.getDate()}, ${current.getFullYear()} ${current.toLocaleTimeString()}`
    return formattedTime;
  }

  createNote = () => {
    const note = {
      id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
      title: 'Title',
      content: '',
      color: this.selectNoteColor(),
      timeStamp: this.getTimeStamp()
    }
    this.setState((prevState) => {
      sessionStorage.setItem('notes', JSON.stringify(prevState.notes.concat(note)));
      return {
        notes: prevState.notes.concat(note)
      };
    });
    this.props.actions.updateNoteAction(this.state.notes)
  }

  updateNoteContent = (element,noteId, value) => {
    var updateNotes = this.state.notes.map(el => el.id === noteId ? {...el, [element]: value, timeStamp: this.getTimeStamp()} : el);
    this.setState((prevState) => {
      return {
        notes: updateNotes
      };
    });
    sessionStorage.setItem('notes', JSON.stringify(updateNotes));
    this.props.actions.updateNoteAction(updateNotes)
  }

  onClickAdd = () => {
    this.createNote()
  }
  onClickDelete = (noteId) => {
    let newNotes = this.state.notes.filter((note) => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
    if(newNotes.length < 1 ) {
      this.createNote()
    }
    sessionStorage.setItem('notes', JSON.stringify(newNotes));
    this.props.actions.updateNoteAction(newNotes)
  }

  render() {
    return (
      <div className='notesList'>
        {this.state.notes.length > 0 && this.state.notes.map((note, i) => {
          return (
            <div key={note.id} draggable>
              <StickyNote
                tape={this.props.tape}
                title={this.props.title}
                footer={this.props.footer}
                note={note}
                onClickAdd={this.onClickAdd}
                onClickDelete={this.onClickDelete}
                updateNoteContent={this.updateNoteContent}
              />
            </div>
          );
        })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notesData: state.notesData.notesData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(action, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickyNotesList)