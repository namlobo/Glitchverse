import './App.css';
import ImageGrid from './components/Game/MultiCursor';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Level1 from "./levels/Level1";
import TypingSwap from "./components/Game/TypingSwap";

// import Signup from './pages/Signup';

import { Routes, Route /*, useLocation*/ } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
  // const location = useLocation();
  // const isHomepage =
  //   location.pathname === '/' ||
  //   location.pathname === '/home' ||
  //   location.pathname === '/homepage';

  return (
    <AuthProvider>
      <div className="App">
        {/* {isHomepage ? (
          <header className="App-header">
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/homepage" element={<Homepage />} />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/typing" element={<TypingSwap />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
            </Routes>
          </header>
        ) : ( */}
        <Routes>
          <Route path="/" element={<ImageGrid />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        {/* )} */}
      </div>
    </AuthProvider>
  );
}

export default App;




