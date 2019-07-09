import React, {useEffect, useState} from 'react';
import firebase from 'firebase'
import firestore from '../Firebase'


function Tables () {
  const [guests, setGuests] = useState([])

  const db = firebase.firestore();

  useEffect( () => {
      return db.collection('guests').onSnapshot(snapshot => {
          setGuests( snapshot.docs.map(doc => doc.data()) )
      }, err => {
        console.log(`Encountered error: ${err}`);
      })
  }, [])

    return (
    <div>
      <h1>Tables</h1>
    {guests.map(guest =>{
     return (<div key={guest.guestName}>{guest.guestName}</div>)}
    )}
    </div>
    )

};

export default Tables;
