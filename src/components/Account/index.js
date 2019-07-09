import React from 'react';
import firebase from 'firebase'
import firestore from '../Firebase'

class Account extends React.Component {
  constructor () {
    super()
    this.state = {
      eventname: '',
      userid: ''
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
    db.settings({
      timestampsInSnapshots: true
    });
    const eventRef = db.collection("Events").add({
      eventname: this.state.eventname,
      userid: this.state.userid
    })
    this.setState({
      eventname: '',
      userid: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.addEvent}>
        <input
          type='text'
          name='eventname'
          placeholder='User Id2'
          onChange={this.updateInput}
          value={this.state.eventname}
        />
        <input
          type='text'
          name='userid'
          placeholder='User Id'
          onChange={this.updateInput}
          value={this.state.userid}
          />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Account;
