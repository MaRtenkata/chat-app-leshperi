
import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from './firebase';

function App() {


  const [user] = useAuthState(auth);

  return (
    <div className="App">
        <header>
          <h1>⚛️🔥💬</h1>
          <SignOut />
        </header>

        <section>
          {user ? <div>Hello</div> : <SignIn />}
        </section>

      
    </div>
  );
}

export default App;
