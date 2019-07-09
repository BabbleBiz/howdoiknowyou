import React from 'react';
import firebase from 'firebase'
import firestore from '../Firebase'

class Input extends React.Component {
  constructor () {
    super()
    this.state = {
      guestName: '',
      additionalName: '',
      priority: 0
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addEvent = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({});
    const eventRef = db.collection("guests").add({
      guestName: this.state.guestName,
      additionalName: this.state.additionalName,
      priority: this.state.priority
    })
    this.setState({
      guestName: '',
      additionalName: '',
      priority: 0
    })
  }

  render () {
    return (
      <div>
      <h2> Input</h2>
      <form onSubmit={this.addEvent}>
        <input
          type='text'
          name='guestName'
          placeholder='Guest Name'
          onChange={this.updateInput}
          value={this.state.guestName}
        />
        <input
          type='text'
          name='additionalName'
          placeholder='Additional Name'
          onChange={this.updateInput}
          value={this.state.additionalName}
          />
        <input
          type='text'
          name='priority'
          onChange={this.updateInput}
          value={this.state.priority}
        />
        <button type='submit'>Submit</button>
      </form>
      </div>
    );
  }
}


export default Input;
