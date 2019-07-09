import React, {useEffect, useState} from 'react';
import firebase from 'firebase'
import firestore from '../Firebase'
import {List} from 'semantic-ui-react'


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
      <div> High
        <List divided relaxed>
          {highPrio.map(guest => {
            return (<List.Item key={guest.guestName} >{guest.guestName}</List.Item>)
          }
          )}
        </List>
      </div>
      <br/>
      <div>Low
        <List divided relaxed>
          {lowPrio.map(guest => {
            return (<List.Item key={guest.guestName} >{guest.guestName}</List.Item>)
          }
          )}
        </List>
      </div>
    </div>
    )

};

export default Tables;
