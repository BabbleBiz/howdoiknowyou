import React from 'react';
import firebase from 'firebase'
import firestore from '../Firebase'


class Tables extends React.Component {
  constructor() {
    super()
    this.state = {
      tables: [],
      guests: []
    }
  }
  async componentDidMount () {
    const db = firebase.firestore();
    const guestsRepsonse = await await db.collection('guests').get()
    const guests = guestsRepsonse.docs.map(doc => doc.data())
    console.log(guests[0].guestName)
    this.setState({
      guests
    })
  }
  render() {
    return (
    <div>
      <h1>Tables</h1>
    {this.state.guests.map(guest =>{
     return (<div key={guest.guestName}>{guest.guestName}</div>)}
    )}
    </div>
    )
  }
};

export default Tables;
