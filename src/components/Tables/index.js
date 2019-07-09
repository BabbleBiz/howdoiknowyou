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

  let highPrio = guests.filter(guest => guest.priority > 2)
  let lowPrio = guests.filter(guest => guest.priority <= 2)
    return (
    <div>
      <h1>Tables</h1>
      <div>High
          {highPrio.map(guest => {
            return (<div key={guest.guestName} >{guest.guestName}</div>)
          }
          )}
      </div>
      <br/>
      <div>Low
          {lowPrio.map(guest => {
            return (<div key={guest.guestName} >{guest.guestName}</div>)
          }
          )}
        </div>

    </div>
    )

};

export default Tables;
