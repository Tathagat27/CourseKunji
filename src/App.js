import './App.css';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Trending from './Trending';
import {Container} from 'react-bootstrap'
import { AuthProvider } from './AuthContext';
import { Route, Routes } from 'react-router-dom';
import LogIn from './LogIn';
import ShortInfo from './ShortInfo';
import Explore from './Explore';


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
        <Navbar />
      <ShortInfo />
      <Explore /> 
      {/* <Trending /> */}
    </AuthProvider>
      
    </div>
  );
}

export default App;