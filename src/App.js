import {auth, provider} from './FirebaseConfig';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Forums from './Forums';



function App() {

  const [user, setUser] = useState(null);

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      const user = result.user;
      console.log(user);
      setUser(user);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleLogout=()=>{
    setUser(null);
  }

  return (
    <Router>
      <div className="wrapper">
        <div className='box'>
          {user?(
            <>
              <button className='btn btn-secondary btn-md'
                onClick={handleLogout}>
                LOGOUT
              </button>
              <h3>Welcome {user.displayName}</h3>
              <p>{user.email}</p>
              <div className='photo'>
                <img src={user.photoURL} alt="dp" referrerPolicy='no-referrer'/>
              </div>
                   {/* Add a link to the FORUMS page */}
                   <Link to="/forums" className='btn btn-primary btn-md'>
                Go to FORUMS
              </Link>
            </>
          ):(
            <button className='btn btn-danger btn-md'
              onClick={handleGoogleSignIn}>
              Sign In With Google
            </button>  
          )} 
      </div>

        {/* Define the routes */}
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/forums" element={<Forums />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;