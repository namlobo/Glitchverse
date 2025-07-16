// import logo from './logo.svg';
import './App.css';
// import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <Routes>
//           <Route path="/" element={<Homepage/>}></Route>
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Login from './pages/Login';

// Auth Context
import { AuthProvider } from './context/authContext';

// Protected Route Wrapper (optional)
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
