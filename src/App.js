import React, {useEffect, useState} from 'react';
import './App.css';
import UploadData from './Components/UploadData';
import RetrieveData from './Components/RetrieveData';
import Login from './Components/Login';
import firebase from './Components/FirebaseConfig'

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])


  return (
    <div>
      {
        user ? (
          <>
            <h1 className='text-center text-slate-950 mt-10 mb-6 font-extrabold text-5xl'>
              Welcome to Omni-Chat
            </h1>
            <UploadData user={user}/>
            <RetrieveData user={user}/>
        </>
        ) : <Login/>
      }
    </div>
  );
}

export default App;
